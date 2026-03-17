import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CalendarDays, Loader2, Calendar, Download, CheckCircle2 } from "lucide-react";

interface ScheduleDemoDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const HEARD_FROM_OPTIONS = [
  "Google Search",
  "Social Media",
  "Referral from an Existing Customer",
  "Industry Event",
  "Other",
];

const RESTRICTED_DOMAINS = [
  "gmail.com", "yahoo.com", "yahoo.co.in", "hotmail.com",
  "outlook.com", "rediffmail.com", "live.com", "msn.com",
  "aol.com", "icloud.com",
];

const MAILING_LIST = [
  "connect@logisticsnow.in",
  "raj@logisticsnow.in",
  "associate@logisticsnow.in",
  "sale@thelogisticsnow.com",
];

const MEETING_CC = [
  "associate@logisticsnow.in",
  "raj@logisticsnow.in",
  "sales@thelogisticsnow.com",
  "smeet@thelogisticsnow.com",
  "partner@logisticsnow.in",
];

const LOG_API_URL = "https://production.lorri.in/api/apilorri/log";

const getDefaultDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toISOString().split("T")[0];
};

const getDefaultTime = () => {
  const now = new Date();
  const nextHour = (now.getHours() + 1) % 24;
  return `${nextHour.toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
};

const formatDateForCal = (dateStr: string, timeStr: string) => {
  const [year, month, day] = dateStr.split("-").map(Number);
  const [hour, minute] = timeStr.split(":").map(Number);
  const d = new Date(year, month - 1, day, hour, minute);
  return d;
};

const toICSDateStr = (d: Date) =>
  d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

const generateGoogleCalendarUrl = (dateStr: string, timeStr: string) => {
  const start = formatDateForCal(dateStr, timeStr);
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const startStr = toICSDateStr(start);
  const endStr = toICSDateStr(end);
  const guests = MAILING_LIST.join(",");
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("LoRRI Demo")}&dates=${startStr}/${endStr}&details=${encodeURIComponent("Join the zoom meeting here - https://us02web.zoom.us/j/3115035961")}&location=${encodeURIComponent("LogisticsNow")}&add=${encodeURIComponent(guests)}`;
};

const generateOutlookUrl = (dateStr: string, timeStr: string) => {
  const start = formatDateForCal(dateStr, timeStr);
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  return `https://outlook.live.com/calendar/0/action/compose?subject=${encodeURIComponent("LoRRI Demo")}&startdt=${start.toISOString()}&enddt=${end.toISOString()}&body=${encodeURIComponent("Join the zoom meeting here - https://us02web.zoom.us/j/3115035961")}&location=${encodeURIComponent("LogisticsNow")}&to=${MAILING_LIST.map(encodeURIComponent).join(";")}`;
};

const downloadICSFile = (dateStr: string, timeStr: string) => {
  const start = formatDateForCal(dateStr, timeStr);
  const end = new Date(start.getTime() + 60 * 60 * 1000);
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//LogisticsNow//LoRRI Demo//EN",
    "BEGIN:VEVENT",
    `DTSTART:${toICSDateStr(start)}`,
    `DTEND:${toICSDateStr(end)}`,
    "SUMMARY:LoRRI Demo",
    "DESCRIPTION:Join the zoom meeting here - https://us02web.zoom.us/j/3115035961",
    "LOCATION:LogisticsNow",
    `ATTENDEE:${MAILING_LIST.map((e) => `mailto:${e}`).join("\nATTENDEE:")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "LoRRI-Demo.ics";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const ScheduleDemoDialog = ({ open, onOpenChange }: ScheduleDemoDialogProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({ date: "", time: "" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    company_name: "",
    designation: "",
    contact_number: "",
    date: getDefaultDate(),
    time: getDefaultTime(),
    heardFrom: "",
    newsletter: true,
  });

  const update = (key: string, value: string | boolean) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const validate = (): string | null => {
    if (!form.name.trim()) return "Please enter your name";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email address";
    const domain = form.email.split("@")[1]?.toLowerCase();
    if (domain && RESTRICTED_DOMAINS.includes(domain))
      return "Please enter a company email address";
    if (!form.contact_number || !/^\+?[\d\s-]{7,15}$/.test(form.contact_number))
      return "Please enter a valid phone number";
    if (!form.date || !form.time)
      return "Please select date and time for demo";
    return null;
  };

  const sendNotificationEmail = async () => {
    const emailBody = {
      from_email: "lorri@logisticsnow.in",
      user_type: "company",
      subject: `Demo Request for LoRRI${form.name ? ` ( Name - ${form.name}` : ""}${form.company_name ? ` & Company Name- ${form.company_name})` : form.name ? ")" : ""}`,
      to_email: MAILING_LIST[0],
      content: `Demo Requested by ${form.name ? `Name - ${form.name}` : ""} ${form.company_name ? `Company Name - ${form.company_name}` : ""} ${form.designation ? `Designation - ${form.designation}` : ""} Contact Email-${form.email} Contact Number - ${form.contact_number} Date - ${form.date} Time - ${form.time} Heard From - ${form.heardFrom || "-"} Newsletter - ${form.newsletter ? "Yes" : "NO"}`,
      email_status: "Pending",
      activity: "Email Request",
    };

    // Send to all recipients
    await Promise.all(
      MAILING_LIST.map((mail) =>
        fetch(LOG_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...emailBody, to_email: mail }),
        }).catch(() => {})
      )
    );
  };

  const sendMeetingInvite = async () => {
    const now = new Date();
    const meetingBody = {
      type: "superlaunch",
      activity: "New Enquiry Email Request",
      mail_status: "Pending",
      from_email: "connect@logisticsnow.in",
      user_type: "company",
      subject: "LoRRI Demo scheduled",
      timestamp: now.toISOString(),
      to_email: form.email,
      cc: MEETING_CC,
      content: `
        <div><span>Dear ${form.name || "User"}</span></div>
        <br/>
        <div><span>
        Team LoRRI is inviting you to a scheduled Zoom meeting.<br/><br/>
        Topic: LoRRI SCHEDULE MEETING<br/><br/>
        Scheduled Date and Time: Date-${form.date}, Time-${form.time}<br/><br/>
        Join Zoom Meeting<br/><br/>
        <a href="https://us02web.zoom.us/j/3115035961" target="_blank" rel="noopener noreferrer">https://us02web.zoom.us/j/3115035961</a><br/>
        Meeting ID: 3115035961<br/>
        </span></div>
        <br/>
        Warm Regards,<br/>
        Team LoRRI.
      `,
    };

    await fetch(LOG_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(meetingBody),
    }).catch(() => {});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      toast({ title: "Validation Error", description: error, variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      // Save to database
      const { error: dbError } = await supabase.from("demo_requests").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        company_name: form.company_name.trim() || null,
        designation: form.designation.trim() || null,
        contact_number: form.contact_number.trim(),
        preferred_date: form.date,
        preferred_time: form.time,
        heard_from: form.heardFrom || null,
        newsletter_opt_in: form.newsletter,
      });

      if (dbError) throw dbError;

      // Send emails via LoRRI API
      await Promise.all([sendNotificationEmail(), sendMeetingInvite()]);

      setSubmittedData({ date: form.date, time: form.time });
      setSubmitted(true);
      toast({ title: "Demo Request Sent!", description: "We'll connect with you shortly to schedule the demo." });
    } catch (err) {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      setSubmitted(false);
      setForm({
        name: "", email: "", company_name: "", designation: "",
        contact_number: "", date: getDefaultDate(), time: getDefaultTime(),
        heardFrom: "", newsletter: true,
      });
    }
    onOpenChange(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto" aria-describedby="schedule-demo-desc">
        {submitted ? (
          <div className="flex flex-col items-center text-center py-6 gap-4">
            <div className="w-16 h-16 rounded-full bg-ln-green/10 flex items-center justify-center">
              <CheckCircle2 className="h-8 w-8 text-ln-green" />
            </div>
            <h3 className="text-xl font-display font-extrabold text-ln-purple">Demo Request Submitted!</h3>
            <p className="text-sm text-muted-foreground max-w-sm">
              Our team will connect with you shortly. Add this meeting to your calendar below.
            </p>

            <div className="w-full grid gap-3 mt-2">
              <Button
                variant="outline"
                className="w-full justify-start gap-3 h-11"
                onClick={() => window.open(generateGoogleCalendarUrl(submittedData.date, submittedData.time), "_blank")}
              >
                <img src="https://www.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_16_2x.png" alt="Google Calendar" className="h-5 w-5" />
                Open in Google Calendar
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-3 h-11"
                onClick={() => window.open(generateOutlookUrl(submittedData.date, submittedData.time), "_blank")}
              >
                <Calendar className="h-5 w-5 text-[#0078d4]" />
                Open in Outlook
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start gap-3 h-11"
                onClick={() => downloadICSFile(submittedData.date, submittedData.time)}
              >
                <Download className="h-5 w-5 text-muted-foreground" />
                Download ICS File
              </Button>
            </div>

            <Button className="w-full mt-2 bg-ln-green hover:bg-ln-green/90 text-white font-bold h-11" onClick={() => handleClose(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="flex items-center gap-2 text-xl font-display font-extrabold text-ln-purple">
                <CalendarDays className="h-5 w-5 text-ln-green" />
                Schedule Meeting / Demo
              </DialogTitle>
              <DialogDescription id="schedule-demo-desc">
                See how LoRRI can transform your logistics operations with a quick, personalized demo.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="grid gap-4 mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="demo-name">Name <span className="text-destructive">*</span></Label>
                  <Input id="demo-name" placeholder="Your full name" value={form.name} onChange={(e) => update("name", e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="demo-email">Organization Email <span className="text-destructive">*</span></Label>
                  <Input id="demo-email" type="email" placeholder="you@company.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="demo-company">Company Name</Label>
                  <Input id="demo-company" placeholder="Company name" value={form.company_name} onChange={(e) => update("company_name", e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="demo-designation">Designation</Label>
                  <Input id="demo-designation" placeholder="Your role" value={form.designation} onChange={(e) => update("designation", e.target.value)} />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="demo-phone">Contact Number <span className="text-destructive">*</span></Label>
                  <Input id="demo-phone" placeholder="+91-XXXXXXXXXX" value={form.contact_number} onChange={(e) => update("contact_number", e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="demo-heard">How did you hear about us?</Label>
                  <Select value={form.heardFrom} onValueChange={(v) => update("heardFrom", v)}>
                    <SelectTrigger id="demo-heard">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      {HEARD_FROM_OPTIONS.map((opt) => (
                        <SelectItem key={opt} value={opt}>{opt}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="demo-date">Preferred Date <span className="text-destructive">*</span></Label>
                  <Input id="demo-date" type="date" min={getDefaultDate()} value={form.date} onChange={(e) => update("date", e.target.value)} />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="demo-time">Preferred Time <span className="text-destructive">*</span></Label>
                  <Input id="demo-time" type="time" value={form.time} onChange={(e) => update("time", e.target.value)} />
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Checkbox
                  id="demo-newsletter"
                  checked={form.newsletter}
                  onCheckedChange={(checked) => update("newsletter", !!checked)}
                />
                <Label htmlFor="demo-newsletter" className="text-sm font-normal text-muted-foreground cursor-pointer">
                  I would like to receive updates on latest modules and news from LoRRI.
                </Label>
              </div>

              <Button type="submit" disabled={loading} className="w-full bg-ln-green hover:bg-ln-green/90 text-white font-bold text-sm h-11">
                {loading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <CalendarDays className="h-4 w-4 mr-2" />}
                {loading ? "Submitting..." : "Schedule Demo"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleDemoDialog;
