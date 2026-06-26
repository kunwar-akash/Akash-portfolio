import type { Metadata } from "next";
import { EducationClient } from "./education-client";

export const metadata: Metadata = {
  title: "Education",
  description:
    "Akash Kunwar's educational background — B.E. in Computer Science from Shoolini University with 8.4 CGPA, and AISSCE from Army Public School.",
};

export default function EducationPage() {
  return <EducationClient />;
}
