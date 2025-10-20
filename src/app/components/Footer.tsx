"use client";
import { useState } from "react";
import styles from "../page.module.css";
import Image from "next/image";

export default function Footer() {
  const EMAIL = "johnnybelesaca@gmail.com";
  const LINKEDIN_URL = "https://www.linkedin.com/in/johnnypillacela/";
  const GITHUB_URL = "https://github.com/JohnnyPillacela";
  const PERSONAL_SITE = "https://www.johnnypillacela.com";

  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(text);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (error) {
      console.error("Failed to copy to clipboard", error);
    }
  }
  return (
    <footer className={styles.footer}>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/linkedin.png"
          alt="LinkedIn icon"
          width={16}
          height={16}
        />
        LinkedIn
      </a>
      <button onClick={() => copyToClipboard(LINKEDIN_URL)}>
        {copiedItem === LINKEDIN_URL ? "✅" : "📋"}
      </button>
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/github-mark-white.png"
          alt="GitHub icon"
          width={16}
          height={16}
        />
        GitHub
      </a>
      <button onClick={() => copyToClipboard(GITHUB_URL)}>
        {copiedItem === GITHUB_URL ? "✅" : "📋"}
      </button>
      <a
        href={PERSONAL_SITE}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/ecu-johnny.PNG"
          alt="Personal Site icon"
          width={16}
          height={16}
        />
        Personal Site
      </a>
      <button onClick={() => copyToClipboard(PERSONAL_SITE)}>
        {copiedItem === PERSONAL_SITE ? "✅" : "📋"}
      </button>
      <a
        href={`mailto:${EMAIL}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="Email icon"
          width={16}
          height={16}
        />
        Email
      </a>
      <button onClick={() => copyToClipboard(EMAIL)}>
        {copiedItem === EMAIL ? "✅" : "📋"}
      </button>
    </footer>
  );
}
