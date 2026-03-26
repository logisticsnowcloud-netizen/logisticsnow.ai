import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Calendar, CalendarDays, CheckCircle2, Download, Loader2, Sparkles } from "lucide-react";

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
  "gmail.com",
  "yahoo.com",
  "yahoo.co.in",
  "hotmail.com",
  "outlook.com",
  "rediffmail.com",
  "live.com",
  "msn.com",
  "aol.com",
  "icloud.com",
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
  return new Date(year, month - 1, day, hour, minute);
};

const toICSDateStr = (date: Date) => date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

const generateGoogleCalendarUrl = (dateStr: string, timeStr: string) => {
  const start = formatDateForCal(dateStr, timeStr);
  const end = new Date(start.getTime() + 60 * 60 * 1000);

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("LoRRI Demo")}&dates=${toICSDateStr(start)}/${toICSDateStr(end)}&details=${encodeURIComponent("Join the Zoom meeting here - https://us02web.zoom.us/j/3115035961")}&location=${encodeURIComponent("LogisticsNow")}&add=${encodeURIComponent(MAILING_LIST.join(","))}`;
};

const generateOutlookUrl = (dateStr: string, timeStr: string) => {
  const start = formatDateForCal(dateStr, timeStr);
  const end = new Date(start.getTime() + 60 * 60 * 1000);

  return `https://outlook.live.com/calendar/0/action/compose?subject=${encodeURIComponent("LoRRI Demo")}&startdt=${start.toISOString()}&enddt=${end.toISOString()}&body=${encodeURIComponent("Join the Zoom meeting here - https://us02web.zoom.us/j/3115035961")}&location=${encodeURIComponent("LogisticsNow")}&to=${MAILING_LIST.map(encodeURIComponent).join(";")}`;
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
    "DESCRIPTION:Join the Zoom meeting here - https://us02web.zoom.us/j/3115035961",
    "LOCATION:LogisticsNow",
    `ATTENDEE:${MAILING_LIST.map((email) => `mailto:${email}`).join("\nATTENDEE:")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "LoRRI-Demo.ics";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const initialFormState = () => ({
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

const ScheduleDemoDialog = ({ open, onOpenChange }: ScheduleDemoDialogProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState({ date: "", time: "" });
  const [form, setForm] = useState(initialFormState());

  const update = (key: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name";
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email address";

    const domain = form.email.split("@")[1]?.toLowerCase();
    if (domain && RESTRICTED_DOMAINS.includes(domain)) return "Please enter a company email address";
    if (!form.contact_number || !/^\+?[\d\s-]{7,15}$/.test(form.contact_number)) return "Please enter a valid phone number";
    if (!form.date || !form.time) return "Please select date and time for demo";

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

    await Promise.all(
      MAILING_LIST.map((mail) =>
        fetch(LOG_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...emailBody, to_email: mail }),
        }).catch(() => undefined),
      ),
    );
  };

  const sendMeetingInvite = async () => {
    await fetch(LOG_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "superlaunch",
        activity: "New Enquiry Email Request",
        mail_status: "Pending",
        from_email: "connect@logisticsnow.in",
        user_type: "company",
        subject: "LoRRI Demo scheduled",
        timestamp: new Date().toISOString(),
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
      }),
    }).catch(() => undefined);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const error = validate();
    if (error) {
      toast({ title: "Validation Error", description: error, variant: "destructive" });
      return;
    }

    setLoading(true);
    try {
      const { supabase } = await import("@/integrations/supabase/client");

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

      await Promise.all([sendNotificationEmail(), sendMeetingInvite()]);
      setSubmittedData({ date: form.date, time: form.time });
      setSubmitted(true);
      toast({ title: "Demo Request Sent!", description: "Add it to your calendar below." });
    } catch (error) {
      console.error("Failed to submit demo request", error);
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (isOpen: boolean) => {
    if (!isOpen) {
      setSubmitted(false);
      setLoading(false);
      setForm(initialFormState());
    }

    onOpenChange(isOpen);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent
        className="w-[calc(100vw-0.5rem)] max-w-[720px] overflow-hidden border border-border/80 bg-background/95 p-0 shadow-2xl backdrop-blur-xl"
        aria-describedby="schedule-demo-desc"
      >
        {submitted ? (
          <div className="flex flex-col gap-4 bg-background px-4 py-5 text-center sm:px-6 sm:py-6">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary sm:h-16 sm:w-16">
              <CheckCircle2 className="h-7 w-7 sm:h-8 sm:w-8" />
            </div>

            <div className="space-y-1.5">
              <h3 className="font-display text-xl font-extrabold text-foreground sm:text-2xl">Demo Request Submitted</h3>
              <p className="mx-auto max-w-md text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
                Your request is in. Choose a calendar option below to save the meeting slot.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-secondary/30 p-2.5 sm:p-3">
              <div className="grid gap-2.5 text-left sm:grid-cols-3 sm:gap-3">
                <Button
                  variant="outline"
                  className="h-10 w-full justify-start gap-2.5 bg-background text-xs sm:h-11 sm:text-sm"
                  onClick={() => window.open(generateGoogleCalendarUrl(submittedData.date, submittedData.time), "_blank", "noopener,noreferrer")}
                >
                  <CalendarDays className="h-4 w-4 text-primary" />
                  Google Calendar
                </Button>
                <Button
                  variant="outline"
                  className="h-10 w-full justify-start gap-2.5 bg-background text-xs sm:h-11 sm:text-sm"
                  onClick={() => window.open(generateOutlookUrl(submittedData.date, submittedData.time), "_blank", "noopener,noreferrer")}
                >
                  <Calendar className="h-4 w-4 text-primary" />
                  Outlook Calendar
                </Button>
                <Button
                  variant="outline"
                  className="h-10 w-full justify-start gap-2.5 bg-background text-xs sm:h-11 sm:text-sm"
                  onClick={() => downloadICSFile(submittedData.date, submittedData.time)}
                >
                  <Download className="h-4 w-4 text-primary" />
                  Download ICS File
                </Button>
              </div>
            </div>

            <Button type="button" className="h-10 w-full text-sm sm:h-11" onClick={() => handleClose(false)}>
              Close
            </Button>
          </div>
        ) : (
          <>
            <div className="border-b border-border bg-secondary/25 px-3 py-2.5 sm:px-5 sm:py-3">
              <DialogHeader className="pr-8 text-left">
                <div className="mb-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-background px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.1em] text-muted-foreground sm:text-[9px]">
                  <Sparkles className="h-2.5 w-2.5 text-primary" />
                  Quick Guided Walkthrough
                </div>
                <DialogTitle className="flex items-center gap-1.5 font-display text-base font-extrabold text-foreground sm:text-xl">
                  <CalendarDays className="h-4 w-4 text-primary" />
                  Schedule Meeting / Demo
                </DialogTitle>
                <DialogDescription id="schedule-demo-desc" className="max-w-2xl text-[11px] leading-4 text-muted-foreground sm:text-xs sm:leading-5">
                  See how LoRRI can transform your logistics operations with a quick, personalized walkthrough.
                </DialogDescription>
              </DialogHeader>
            </div>

            <div className="px-3 pb-3 pt-2.5 sm:px-5 sm:pb-4">
              <form onSubmit={handleSubmit} className="grid gap-2">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <Label htmlFor="demo-name" className="text-[10px] font-semibold leading-none text-muted-foreground">Name <span className="text-destructive">*</span></Label>
                    <Input id="demo-name" className="h-8 text-xs sm:h-9 sm:text-sm" placeholder="Your full name" value={form.name} onChange={(event) => update("name", event.target.value)} />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="demo-email" className="text-[10px] font-semibold leading-none text-muted-foreground">Organization Email <span className="text-destructive">*</span></Label>
                    <Input id="demo-email" type="email" className="h-8 text-xs sm:h-9 sm:text-sm" placeholder="you@company.com" value={form.email} onChange={(event) => update("email", event.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <Label htmlFor="demo-company" className="text-[10px] font-semibold leading-none text-muted-foreground">Company Name</Label>
                    <Input id="demo-company" className="h-8 text-xs sm:h-9 sm:text-sm" placeholder="Company name" value={form.company_name} onChange={(event) => update("company_name", event.target.value)} />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="demo-designation" className="text-[10px] font-semibold leading-none text-muted-foreground">Designation</Label>
                    <Input id="demo-designation" className="h-8 text-xs sm:h-9 sm:text-sm" placeholder="Your role" value={form.designation} onChange={(event) => update("designation", event.target.value)} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <Label htmlFor="demo-phone" className="text-[10px] font-semibold leading-none text-muted-foreground">Contact Number <span className="text-destructive">*</span></Label>
                    <Input id="demo-phone" className="h-8 text-xs sm:h-9 sm:text-sm" placeholder="+91-XXXXXXXXXX" value={form.contact_number} onChange={(event) => update("contact_number", event.target.value)} />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="demo-heard" className="text-[10px] font-semibold leading-none text-muted-foreground">How did you hear about us?</Label>
                    <Select value={form.heardFrom} onValueChange={(value) => update("heardFrom", value)}>
                      <SelectTrigger id="demo-heard" className="h-8 text-xs sm:h-9 sm:text-sm">
                        <SelectValue placeholder="Select an option" />
                      </SelectTrigger>
                      <SelectContent className="z-[320]">
                        {HEARD_FROM_OPTIONS.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <Label htmlFor="demo-date" className="text-[10px] font-semibold leading-none text-muted-foreground">Preferred Date <span className="text-destructive">*</span></Label>
                    <Input id="demo-date" type="date" className="h-8 text-xs sm:h-9 sm:text-sm" min={getDefaultDate()} value={form.date} onChange={(event) => update("date", event.target.value)} />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="demo-time" className="text-[10px] font-semibold leading-none text-muted-foreground">Preferred Time <span className="text-destructive">*</span></Label>
                    <Input id="demo-time" type="time" className="h-8 text-xs sm:h-9 sm:text-sm" value={form.time} onChange={(event) => update("time", event.target.value)} />
                  </div>
                </div>

                <div className="col-span-2 flex items-start gap-2 rounded-xl border border-border bg-secondary/35 px-2.5 py-2 sm:px-3 sm:py-2.5">
                  <Checkbox id="demo-newsletter" checked={form.newsletter} onCheckedChange={(checked) => update("newsletter", !!checked)} />
                  <Label htmlFor="demo-newsletter" className="cursor-pointer text-[10px] font-normal leading-4 text-muted-foreground sm:text-[11px] sm:leading-4">
                    I would like to receive updates on latest modules and news from LoRRI.
                  </Label>
                </div>

                <Button type="submit" disabled={loading} className="col-span-2 h-9 w-full text-xs font-semibold sm:h-10 sm:text-sm">
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <CalendarDays className="mr-2 h-4 w-4" />}
                  {loading ? "Submitting..." : "Schedule Demo"}
                </Button>
              </form>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleDemoDialog;
