"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/data";

export function ExperienceClient() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Experience"
            title="Professional"
            titleHighlight="Journey"
            description="Building and maintaining quality in enterprise software systems — from incident triage to release ownership."
          />

          <div className="max-w-4xl mx-auto">
            {experience.map((job, i) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline connector */}
                {i < experience.length - 1 && (
                  <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 to-transparent" />
                )}

                <div className="flex gap-6 mb-12">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 z-10 relative">
                      <Briefcase className="h-5 w-5 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 glass-card rounded-2xl p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{job.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Building2 className="h-4 w-4 text-indigo-500" />
                          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                            {job.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1.5 flex-shrink-0">
                        <Badge variant="default" className="w-fit">
                          {job.type}
                        </Badge>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          {job.period}
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          {job.location}
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {job.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Key Contributions
                      </h4>
                      <ul className="space-y-3">
                        {job.achievements.map((item, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: j * 0.05 }}
                            className="flex items-start gap-2.5"
                          >
                            <CheckCircle2 className="h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech stack */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                        Tech & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {job.tech.map((t) => (
                          <Badge key={t} variant="tech">{t}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Future card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0">
                <div className="h-10 w-10 rounded-xl border-2 border-dashed border-indigo-400 flex items-center justify-center">
                  <span className="text-indigo-400 text-lg font-bold">?</span>
                </div>
              </div>
              <div className="flex-1 glass-card rounded-2xl p-6 border-dashed">
                <h3 className="font-semibold text-foreground mb-1">Next Opportunity</h3>
                <p className="text-sm text-muted-foreground">
                  Open to exciting roles in QA engineering, production support, and software reliability.{" "}
                  <a href="mailto:kunwarakash89@gmail.com" className="text-indigo-500 hover:underline">
                    Let&apos;s connect
                  </a>
                  .
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
