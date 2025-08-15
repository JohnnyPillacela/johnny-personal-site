import styles from "./About.module.css";

const SKILLS = [
  "AWS",
  "S3",
  "CloudWatch",
  "Lambda",
  "Cursor",
  "Tailwind",
  "React",
  "Angular",
  "Next.js",
  "Python",
  "Java",
  "Microservices",
  "TypeScript",
  "Node.js",
  "Docker",
  "MongoDB",
];

export default function About() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>About Me</h2>
          <p className={styles.description}>
            Hey, I'm Johnny — a software engineer who loves building modern web applications. 
            I specialize in React and Next.js, creating fast, responsive sites with tools like 
            Tailwind CSS and shadcn/ui. When I'm not coding, you'll find me working on 
            construction projects or exploring new business opportunities.
          </p>
          
          <div className={styles.skills}>
            <h3 className={styles.skillsHeading}>Skills & Technologies</h3>
            <div className={styles.badges}>
              {SKILLS.map((skill) => (
                <span key={skill} className={styles.badge}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.imageContainer}>
          <img 
            src="/ecu-johnny.PNG" 
            alt="Johnny's animated photo" 
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
