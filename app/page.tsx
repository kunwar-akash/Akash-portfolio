"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Download,
  Linkedin,
  Github,
  Mail,
  MapPin,
  CheckCircle2,
  Rocket,
  TrendingDown,
  Target,
  Award,
} from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { personalInfo, stats, skills, achievements } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
  }),
};

const iconMap: Record<string, React.ElementType> = {
  Rocket,
  TrendingDown,
  Target,
  Award,
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden">
        <AnimatedBackground />
        <div className="container-custom relative z-10 pt-24 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/60 dark:border-indigo-800/40 mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse-slow" />
              <span className="text-sm text-indigo-700 dark:text-indigo-300 font-medium">
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-4"
            >
              Hi, I&apos;m{" "}
              <span className="gradient-text block sm:inline">
                Akash Kunwar
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-xl md:text-2xl font-medium text-muted-foreground mb-6"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed"
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
            >
              <Button asChild size="lg" variant="gradient">
                <Link href="/experience">
                  View My Work <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact Me</Link>
              </Button>
              <Button asChild size="lg" variant="ghost">
                <a href="/resume.pdf" download>
                  <Download className="h-4 w-4" /> Resume
                </a>
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={5}
              className="flex items-center justify-center gap-4 mb-14"
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-indigo-500 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <span className="text-border">·</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-indigo-500 transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <span className="text-border">·</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-indigo-500 transition-colors"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
              <span className="text-border">·</span>
              <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {personalInfo.location}
              </span>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={6}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-4 text-center"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-indigo-500 to-transparent" />
        </motion.div>
      </section>

      {/* Summary section */}
      <section className="section-padding bg-muted/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-8 bg-indigo-500" />
                <span className="text-sm font-medium text-indigo-500 uppercase tracking-widest">
                  About Me
                </span>
                <span className="h-px w-8 bg-indigo-500" />
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                Engineering Quality into{" "}
                <span className="gradient-text">Every Release</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {personalInfo.summary}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left mb-8">
                {personalInfo.summaryPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-indigo-500 mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline">
                <Link href="/about">
                  Learn More About Me <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements highlight */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-indigo-500" />
              <span className="text-sm font-medium text-indigo-500 uppercase tracking-widest">
                Highlights
              </span>
              <span className="h-px w-8 bg-indigo-500" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Key <span className="gradient-text">Achievements</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item, i) => {
              const Icon = iconMap[item.icon] || Award;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <Card glass className="h-full overflow-hidden group">
                    <CardContent className="p-6 flex gap-4">
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-foreground">{item.title}</h3>
                          <span className="text-xl font-bold gradient-text">{item.metric}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/achievements">
                View All Achievements <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Skills highlight */}
      <section className="section-padding bg-muted/20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-8 bg-indigo-500" />
              <span className="text-sm font-medium text-indigo-500 uppercase tracking-widest">
                Tech Stack
              </span>
              <span className="h-px w-8 bg-indigo-500" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Skills & <span className="gradient-text">Tools</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.05 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {[
              ...skills.languages.items,
              ...skills.databases.items,
              ...skills.api.items,
              ...skills.devops.items,
              ...skills.vcs.items,
              ...skills.pm.items,
              ...skills.os.items,
            ].map((skill) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              >
                <Badge variant="tech" className="py-1 px-3 text-xs font-medium">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link href="/skills">
                View Full Skills <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 p-10 md:p-16 text-center"
          >
            <div className="absolute inset-0 dot-grid opacity-20" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let&apos;s Work Together
              </h2>
              <p className="text-indigo-100 text-lg mb-8 max-w-xl mx-auto">
                Looking for a dedicated SDET who takes ownership of quality? Let&apos;s connect.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button asChild size="xl" className="bg-white text-indigo-700 hover:bg-indigo-50">
                  <Link href="/contact">Get In Touch</Link>
                </Button>
                <Button asChild size="xl" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                  <a href="/resume.pdf" download>
                    <Download className="h-4 w-4" /> Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
