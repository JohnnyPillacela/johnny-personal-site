import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>About Me</h2>
      <p>
        Hey, I'm Johnny — a software engineer who loves building modern web applications. 
        I specialize in React and Next.js, creating fast, responsive sites with tools like 
        Tailwind CSS and shadcn/ui. When I'm not coding, you'll find me working on 
        construction projects or exploring new business opportunities.
      </p>
    </section>
  );
}
