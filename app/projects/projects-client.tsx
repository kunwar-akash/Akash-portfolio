"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Calendar, Tag, Layers } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/data";

export function ProjectsClient() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Projects"
            title="Featured"
            titleHighlight="Work"
            description="Enterprise projects where I drove production quality, incident management, and end-to-end release validation."
          />

          <div className="space-y-8 max-w-5xl mx-auto">
            {projects.map((project, i) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-3xl overflow-hidden group"
              >
                {/* Gradient accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

                <div className="p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      {/* Icon */}
                      <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Layers className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h2 className="text-xl font-bold text-foreground">{project.name}</h2>
                          {project.tag && (
                            <Badge variant="default" className="text-xs">
                              {project.tag}
                            </Badge>
                          )}
                          <Badge
                            variant={project.status === "Active" ? "success" : "secondary"}
                            className="text-xs"
                          >
                            {project.status}
                          </Badge>
                        </div>
                        <p className="text-indigo-600 dark:text-indigo-400 font-medium text-sm mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5 sm:items-end text-sm text-muted-foreground flex-shrink-0">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-3.5 w-3.5" />
                        {project.period}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Tag className="h-3.5 w-3.5" />
                        {project.category}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Contributions & Impact
                    </h3>
                    <ul className="space-y-2.5">
                      {project.achievements.map((item, j) => (
                        <motion.li
                          key={j}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: j * 0.05 }}
                          className="flex items-start gap-2.5"
                        >
                          <CheckCircle2 className={`h-4 w-4 flex-shrink-0 mt-0.5`} style={{ color: "#6366f1" }} />
                          <span className="text-sm text-foreground/80 leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech */}
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <Badge key={t} variant="tech">{t}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
