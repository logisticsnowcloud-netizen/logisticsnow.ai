import { useState } from "react";
import { MapPin, Phone, Mail, Send, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "react-router-dom";

const HELP_OPTIONS = [
  "Product Discovery",
  "Careers @ LogisticsNow",
  "Partner with LogisticsNow",
  "Customer Support",
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    help: "",
    message: "",
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.help) {
      toast.error("Please fill in all required fields.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you! We'll get back to you shortly.");
      setForm({ name: "", email: "", company: "", phone: "", help: "", message: "" });
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-background font-body">

      {/* Main Content */}
      <section className="px-[5vw] py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-16">
          {/* Left - Location Info */}
          <ScrollReveal>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-1">
                Our <span className="text-ln-green">Location</span>
              </h2>
              <div className="w-16 h-[3px] rounded-full bg-ln-green mb-6" />

              <p className="text-sm text-muted-foreground mb-6">We are happy to help!</p>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-ln-purple mt-0.5 shrink-0" />
                  <p className="text-sm text-foreground leading-relaxed">
                    409, Neptune's Flying Colors, L.B.S Cross Road, Near Mulund Check Naka, Mulund West, Mumbai, Maharashtra 400080, India
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-ln-purple shrink-0" />
                  <p className="text-sm text-foreground">
                    +91-9867773508 / +91-9653620207
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-ln-purple shrink-0" />
                  <a href="mailto:connect@logisticsnow.in" className="text-sm text-ln-purple hover:underline no-underline font-medium">
                    connect@logisticsnow.in
                  </a>
                </div>
              </div>

              {/* Map embed */}
              <div className="mt-8 rounded-2xl overflow-hidden border border-border">
                <iframe
                  title="LogisticsNow Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0!2d72.95!3d19.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDEwJzEyLjAiTiA3MsKwNTcnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Contact Form */}
          <ScrollReveal delay={0.15}>
            <div>
              <p className="text-sm text-muted-foreground mb-6">
                Please fill out the following form and a representative will contact you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Name*</label>
                    <Input
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="Your name"
                      className="h-12 rounded-xl border-border bg-background text-sm focus-visible:ring-ln-purple"
                      maxLength={100}
                      required
                    />
                  </div>
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Email*</label>
                    <Input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="you@company.com"
                      className="h-12 rounded-xl border-border bg-background text-sm"
                      maxLength={255}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Company */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Company Name</label>
                    <Input
                      value={form.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      placeholder="Company name"
                      className="h-12 rounded-xl border-border bg-background text-sm"
                      maxLength={100}
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Phone Number</label>
                    <Input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="+91-XXXXXXXXXX"
                      className="h-12 rounded-xl border-border bg-background text-sm"
                      maxLength={20}
                    />
                  </div>
                </div>

                {/* How can we help - Dropdown */}
                <div className="relative">
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5">How can we help?*</label>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className={`w-full h-12 rounded-xl border bg-background px-3 text-sm text-left flex items-center justify-between cursor-pointer transition-colors ${
                      form.help ? "text-foreground" : "text-muted-foreground"
                    } ${dropdownOpen ? "border-ln-purple ring-2 ring-ln-purple/20" : "border-border"}`}
                    style={{ fontFamily: "inherit" }}
                  >
                    <span>{form.help || "Please Select"}</span>
                    <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute z-20 top-full left-0 right-0 mt-1 rounded-xl border border-border bg-background shadow-lg overflow-hidden">
                      {HELP_OPTIONS.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => {
                            handleChange("help", opt);
                            setDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-sm hover:bg-surface transition-colors cursor-pointer border-none bg-transparent ${
                            form.help === opt ? "text-ln-purple font-semibold bg-surface" : "text-foreground"
                          }`}
                          style={{ fontFamily: "inherit" }}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Share more details</label>
                  <Textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us more about how we can help..."
                    className="min-h-[120px] rounded-xl border-border bg-background text-sm resize-y"
                    maxLength={1000}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary-ln w-full flex items-center justify-center gap-2 !py-3.5 !rounded-xl disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                  <Send size={16} />
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
};

export default Contact;
