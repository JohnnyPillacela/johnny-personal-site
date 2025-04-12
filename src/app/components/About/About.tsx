import styles from "./About.module.css";

export default function About() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>About Me</h2>
      <p>
        Hey, I’m Johnny — a software engineer with experience in backend and
        frontend systems. I’ve worked with Angular, Node.js, and Java. I also
        have a passion for construction and entrepreneurship.
      </p>
    </section>
  );
}
