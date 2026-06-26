"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Star, CheckCircle2 } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { education } from "@/lib/data";

export function EducationClient() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Education"
            title="Academic"
            titleHighlight="Background"
            description="A strong foundation in Computer Science that powers my problem-solving approach to production support and quality engineering."
          />

          <div className="max-w-3xl mx-auto space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex gap-6"
              >
                {/* Icon + line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                    <GraduationCap className="h-5 w-5 text-white" />
                  </div>
                  {i < education.length - 1 && (
                    <div className="flex-1 w-0.5 mt-2 bg-gradient-to-b from-indigo-400/60 to-transparent min-h-[40px]" />
                  )}
                </div>

                {/* Card */}
                <div className="flex-1 glass-card rounded-2xl p-6 md:p-8 mb-2">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5">
                        {edu.field}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1.5 flex-shrink-0">
                      {edu.grade && (
                        <div className="flex items-center gap-1.5">
                          <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                          <span className="font-bold text-amber-600 dark:text-amber-400 text-sm">
                            {edu.grade}
                          </span>
                        </div>
                      )}
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {edu.location}
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="font-semibold text-foreground">{edu.institution}</span>
                  </div>

                  {edu.highlights.length > 0 && (
                    <ul className="space-y-2">
                      {edu.highlights.map((point, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Coursework */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-3xl mx-auto glass-card rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-6 text-center">
              Relevant <span className="gradient-text">Coursework</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                "Data Structures & Algorithms",
                "Database Management Systems",
                "Operating Systems",
                "Computer Networks",
                "Software Engineering",
                "Object-Oriented Programming",
                "Web Technologies",
                "Informatics Practices",
                "System Programming",
                "Software Testing",
              ].map((course) => (
                <Badge key={course} variant="tech" className="py-1 px-3">
                  {course}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
