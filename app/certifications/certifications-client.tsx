"use client";

import { motion } from "framer-motion";
import { Award, Plus, Mail } from "lucide-react";
import { SectionHeader } from "@/components/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CertificationsClient() {
  return (
    <div className="pt-24">
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            eyebrow="Certifications"
            title="Credentials &"
            titleHighlight="Certifications"
            description="Professional certifications and credentials that validate my technical expertise."
          />

          {/* Placeholder state */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mx-auto text-center py-16"
          >
            <div className="h-20 w-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-indigo-500/30">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Coming Soon</h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Certifications will be added here as they are earned. Currently
              focused on gaining hands-on production experience and pursuing
              relevant QA and DevOps certifications.
            </p>

            <div className="glass-card rounded-2xl p-6 mb-8 text-left space-y-4">
              <h4 className="font-semibold text-foreground">Planned Certifications</h4>
              <ul className="space-y-3">
                {[
                  "ISTQB Foundation Level (CTFL)",
                  "AWS Certified Cloud Practitioner",
                  "Docker Certified Associate",
                  "Certified Kubernetes Administrator (CKA)",
                ].map((cert) => (
                  <li key={cert} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Plus className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild variant="outline">
              <Link href="/contact">
                <Mail className="h-4 w-4" /> Get in Touch
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
