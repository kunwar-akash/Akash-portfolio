"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  Download,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Award,
} from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo, skills } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

const highlights = [
  { icon: Briefcase, label: "2+ Years Experience", desc: "in production support & enterprise QA" },
  { icon: GraduationCap, label: "B.E. Computer Science", desc: "Shoolini University, CGPA 8.4/10" },
  { icon: Award, label: "~40% Defect Reduction", desc: "across enterprise telecom platform" },
  { icon: CheckCircle2, label: "98% On-Time Delivery", desc: "across 25+ sprint releases" },
];

export function AboutClient() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="About"
            title="Who I"
            titleHighlight="Am"
            description="A Software Development Engineer passionate about quality, reliability, and preventing defects from reaching production."
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: Avatar + contact */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
            >
              {/* Avatar placeholder */}
              <div className="relative">
                <div className="h-48 w-48 rounded-3xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-2xl shadow-indigo-500/30">
                  <span className="text-6xl font-bold text-white select-none">AK</span>
                </div>
                <div className="absolute -bottom-3 -right-3 h-10 w-10 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
              </div>

              {/* Contact info */}
              <div className="w-full glass-card rounded-2xl p-5 space-y-3">
                <h3 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">
                  Contact Info
                </h3>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-sm text-foreground hover:text-indigo-500 transition-colors"
                >
                  <Mail className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                  {personalInfo.email}
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="flex items-center gap-2 text-sm text-foreground hover:text-indigo-500 transition-colors"
                >
                  <Phone className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                  {personalInfo.phone}
                </a>
                <div className="flex items-center gap-2 text-sm text-foreground">
                  <MapPin className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                  {personalInfo.location}
                </div>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground hover:text-indigo-500 transition-colors"
                >
                  <Linkedin className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                  LinkedIn Profile
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground hover:text-indigo-500 transition-colors"
                >
                  <Github className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                  GitHub Profile
                </a>
              </div>

              <Button asChild variant="gradient" className="w-full">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" /> Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Right: Bio content */}
            <div className="lg:col-span-3 space-y-8">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
              >
                <h3 className="text-xl font-semibold mb-3">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  {personalInfo.summary}
                </p>
              </motion.div>

              {/* Highlights grid */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="grid grid-cols-2 gap-4"
              >
                {highlights.map((item) => (
                  <div key={item.label} className="glass-card rounded-xl p-4 flex flex-col gap-2">
                    <item.icon className="h-5 w-5 text-indigo-500" />
                    <div>
                      <div className="font-semibold text-sm text-foreground">{item.label}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* What I do */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={3}
              >
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <div className="space-y-3">
                  {[
                    {
                      title: "Production Support & Validation",
                      desc: "Owning end-to-end validation for weekly production releases, ensuring defect-free deployments for international enterprise customers.",
                    },
                    {
                      title: "Incident Management & RCA",
                      desc: "Investigating production incidents through Linux log analysis and SQL queries, performing root cause analysis and driving resolution.",
                    },
                    {
                      title: "REST API Testing",
                      desc: "Validating microservice APIs with Postman — verifying request/response integrity, authentication flows, and service dependencies.",
                    },
                    {
                      title: "Cross-Functional Collaboration",
                      desc: "Communicating RCA findings and release readiness with 20+ stakeholders across engineering, product, and business teams.",
                    },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="h-2 w-2 rounded-full bg-indigo-500" />
                      </div>
                      <div>
                        <span className="font-medium text-sm text-foreground">{item.title} — </span>
                        <span className="text-sm text-muted-foreground">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tech overview */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={4}
              >
                <h3 className="text-xl font-semibold mb-4">Tech & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    ...skills.languages.items,
                    ...skills.databases.items,
                    ...skills.api.items,
                    ...skills.devops.items,
                    ...skills.vcs.items,
                    ...skills.pm.items,
                  ].map((s) => (
                    <Badge key={s} variant="tech">{s}</Badge>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={5}
                className="flex gap-3"
              >
                <Button asChild variant="gradient">
                  <Link href="/experience">
                    View Experience <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
