"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2 } from "lucide-react";
import toast from "react-hot-toast";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { personalInfo } from "@/lib/data";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    desc: "Best way to reach me",
  },
  {
    icon: Phone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    desc: "Available Mon–Fri",
  },
  {
    icon: MapPin,
    label: "Location",
    value: personalInfo.location,
    href: null,
    desc: "Open to remote & hybrid",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "akashkunwaronline",
    href: personalInfo.linkedin,
    desc: "Connect professionally",
  },
];

export function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    // Simulate sending — replace with your preferred service (EmailJS, Resend, etc.)
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Contact"
            title="Let's"
            titleHighlight="Connect"
            description="Open to new opportunities, collaborations, and interesting conversations about QA, production support, and software quality."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">Get In Touch</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  I&apos;m currently open to new opportunities. Whether you have a question,
                  a job opportunity, or just want to say hi — drop me a message.
                </p>
              </div>

              {/* Contact methods */}
              <div className="space-y-3">
                {contactMethods.map((method) => (
                  <div
                    key={method.label}
                    className="glass-card rounded-xl p-4 flex items-center gap-3"
                  >
                    <div className="h-9 w-9 rounded-lg bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center flex-shrink-0">
                      <method.icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">{method.label}</div>
                      {method.href ? (
                        <a
                          href={method.href}
                          target={method.href.startsWith("http") ? "_blank" : undefined}
                          rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-sm font-medium text-foreground hover:text-indigo-500 transition-colors truncate block"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium text-foreground truncate block">
                          {method.value}
                        </span>
                      )}
                      <div className="text-xs text-muted-foreground">{method.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social row */}
              <div>
                <p className="text-sm text-muted-foreground mb-3">Also find me on:</p>
                <div className="flex gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-indigo-500 hover:border-indigo-500/40 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 w-9 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-indigo-500 hover:border-indigo-500/40 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center gap-4"
                >
                  <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you within 24–48 hours.
                  </p>
                  <Button onClick={() => setSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="glass-card rounded-2xl p-6 md:p-8 space-y-5"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-sm font-medium text-foreground">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your opportunity, project, or just say hi..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[130px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full"
                    disabled={submitting}
                  >
                    {submitting ? (
                      <>
                        <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Or email directly at{" "}
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-indigo-500 hover:underline"
                    >
                      {personalInfo.email}
                    </a>
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
