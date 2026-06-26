import type { Metadata } from "next";
import { AchievementsClient } from "./achievements-client";

export const metadata: Metadata = {
  title: "Achievements",
  description:
    "Key achievements by Akash Kunwar — 40+ production releases, ~40% defect reduction, 98% on-time delivery, and 300+ validated user stories.",
};

export default function AchievementsPage() {
  return <AchievementsClient />;
}
