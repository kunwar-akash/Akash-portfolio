import type { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Akash Kunwar — Software Development Engineer (SDET) open to new opportunities in QA engineering, production support, and software reliability.",
};

export default function ContactPage() {
  return <ContactClient />;
}
