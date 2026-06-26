import type { Metadata } from "next";
import { AboutClient } from "./about-client";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Akash Kunwar — a Software Development Engineer (SDET) with expertise in production support, incident management, and enterprise application validation.",
};

export default function AboutPage() {
  return <AboutClient />;
}
