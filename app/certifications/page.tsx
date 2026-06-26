import type { Metadata } from "next";
import { CertificationsClient } from "./certifications-client";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Certifications and credentials of Akash Kunwar — Software Development Engineer (SDET).",
};

export default function CertificationsPage() {
  return <CertificationsClient />;
}
