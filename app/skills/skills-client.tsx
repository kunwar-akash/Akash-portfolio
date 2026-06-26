"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Terminal,
  Globe,
  Container,
  GitBranch,
  LayoutDashboard,
  CheckCircle,
  Headphones,
} from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Database,
  Terminal,
  Globe,
  Container,
  GitBranch,
  LayoutDashboard,
  CheckCircle,
  HeadphonesIcon: Headphones,
};

export function SkillsClient() {
  const skillCategories = Object.values(skills);

  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Skills"
            title="Technical"
            titleHighlight="Expertise"
            description="A comprehensive toolkit for production support, quality assurance, and enterprise application validation."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {skillCategories.map((category, i) => {
              const Icon = iconMap[category.icon] || Code2;
              return (
                <motion.div
                  key={category.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-2xl p-6 group"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-md`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground">{category.label}</h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((skill) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <Badge variant="tech" className="cursor-default">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Proficiency overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 glass-card rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold mb-6 text-center">Core Proficiencies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "Production Support & Incident Management", pct: 92 },
                { label: "REST API Testing & Validation", pct: 88 },
                { label: "SQL & Database Validation", pct: 85 },
                { label: "Linux Log Analysis", pct: 83 },
                { label: "Agile / JIRA Project Management", pct: 90 },
                { label: "Root Cause Analysis (RCA)", pct: 88 },
                { label: "Release & Regression Testing", pct: 95 },
                { label: "Docker & Kubernetes (basic)", pct: 65 },
              ].map((item, i) => (
                <div key={item.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground font-medium">{item.label}</span>
                    <span className="text-muted-foreground">{item.pct}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
