import type { Metadata } from "next";
import { ProjectsClient } from "./projects-client";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Portfolio of projects by Akash Kunwar — including EarthLink (enterprise telecom), VeriHire (AI recruitment SaaS), and HyreWorks (employee management SaaS).",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
