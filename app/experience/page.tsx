import type { Metadata } from "next";
import { ExperienceClient } from "./experience-client";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Akash Kunwar's professional experience — Software Development Engineer (SDET) at DigiMantra Labs, working on enterprise QA, production support, and incident management.",
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
