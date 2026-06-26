import type { Metadata } from "next";
import { SkillsClient } from "./skills-client";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills of Akash Kunwar — Java, SQL, MySQL, Linux, REST APIs, Postman, Docker, Kubernetes, Git, JIRA, and comprehensive testing methodologies.",
};

export default function SkillsPage() {
  return <SkillsClient />;
}
