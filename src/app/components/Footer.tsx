"use client";
import styles from "../page.module.css";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.linkedin.com/in/johnnypillacela/"
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
      <a
        href="https://github.com/JohnnyPillacela"
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
    </footer>
  );
}
