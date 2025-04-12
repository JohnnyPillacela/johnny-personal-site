import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />

        <Image
          src="/ecu-johnny.png"
          alt="Next.js logo"
          width={180}
          height={200}
          priority
        />

        <div className={styles.ctas}>

        </div> 
      </main>
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
    </div>
  );
}
