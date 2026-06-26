"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  TrendingDown,
  Target,
  Award,
  CheckSquare,
  Users,
  Zap,
  Shield,
} from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { achievements, stats } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  TrendingDown,
  Target,
  Award,
};

const additionalHighlights = [
  {
    icon: CheckSquare,
    title: "300+ User Stories Validated",
    description: "Across functional, regression, smoke, sanity, and integration testing cycles over 25+ sprints.",
  },
  {
    icon: Users,
    title: "20+ Cross-Functional Stakeholders",
    description: "Collaborated with product, engineering, and business teams on incident communication and release readiness.",
  },
  {
    icon: Zap,
    title: "Faster Mean-Time-To-Resolution",
    description: "Improved MTTR through structured RCA methodology and proactive log-based incident triage.",
  },
  {
    icon: Shield,
    title: "Zero Critical Escapes",
    description: "Maintained a record of preventing critical production defects from reaching international end users.",
  },
];

export function AchievementsClient() {
  return (
    <div className="pt-24">
      {/* Stats banner */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white">{stat.value}</div>
                <div className="text-indigo-100 text-sm mt-1 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Achievements"
            title="Impact &"
            titleHighlight="Recognition"
            description="Measurable results and recognition earned through consistent ownership of production quality and release engineering."
          />

          {/* Main achievements grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {achievements.map((item, i) => {
              const Icon = iconMap[item.icon] || Award;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-2xl overflow-hidden group"
                >
                  {/* Gradient top */}
                  <div className={`h-1 w-full bg-gradient-to-r ${item.color}`} />

                  <div className="p-6 md:p-8">
                    <div className="flex items-start gap-5">
                      <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                        </div>
                        <div className="text-3xl font-bold gradient-text mb-3">{item.metric}</div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional highlights */}
          <div>
            <h2 className="text-2xl font-bold text-center mb-8">
              Additional <span className="gradient-text">Highlights</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {additionalHighlights.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-2xl p-5 text-center"
                >
                  <div className="h-10 w-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 flex items-center justify-center mx-auto mb-3">
                    <item.icon className="h-5 w-5 text-indigo-500" />
                  </div>
                  <h3 className="font-semibold text-sm text-foreground mb-2">{item.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recognition quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 relative rounded-3xl bg-gradient-to-r from-indigo-600/10 to-blue-600/10 border border-indigo-200/30 dark:border-indigo-800/30 p-10 text-center"
          >
            <div className="text-5xl text-indigo-400 mb-4 font-serif leading-none">&ldquo;</div>
            <p className="text-lg md:text-xl text-foreground font-medium italic max-w-2xl mx-auto mb-4">
              Recognized internally for end-to-end ownership of release quality and driving
              cross-team resolution of critical production incidents.
            </p>
            <div className="text-sm text-muted-foreground">— Internal Recognition, DigiMantra Labs</div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
