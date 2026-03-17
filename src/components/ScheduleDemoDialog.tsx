import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { CalendarDays, Loader2 } from "lucide-react";

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

const ScheduleDemoDialog = ({ open, onOpenChange }: ScheduleDemoDialogProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
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

      // Send notification email
      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
      await fetch(
        `https://${projectId}.supabase.co/functions/v1/send-demo-request`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", "apikey": import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            company_name: form.company_name,
            designation: form.designation,
            contact_number: form.contact_number,
            date: form.date,
            time: form.time,
            heardFrom: form.heardFrom,
            newsletter: form.newsletter,
          }),
        }
      ).catch(() => {});

      toast({ title: "Demo Request Sent!", description: "We'll connect with you shortly to schedule the demo." });
      onOpenChange(false);
      setForm({
        name: "", email: "", company_name: "", designation: "",
        contact_number: "", date: getDefaultDate(), time: getDefaultTime(),
        heardFrom: "", newsletter: true,
      });
    } catch (err) {
      toast({ title: "Error", description: "Something went wrong. Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl font-display font-extrabold text-ln-purple">
            <CalendarDays className="h-5 w-5 text-ln-green" />
            Schedule Meeting / Demo
          </DialogTitle>
          <p className="text-sm text-muted-foreground mt-1">
            See how LoRRI can transform your logistics operations with a quick, personalized demo.
          </p>
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
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleDemoDialog;
