"use client";

import styles from "./Experience.module.css";
import Image from "next/image";

export default function Experience() {
  return (
    <section className={styles.section}>
      <h3 className={styles.heading}>Work Experience</h3>
      <div className={styles.jobs}>
        {WORK_EXPERIENCE.map((job) => (
          <div key={job.id} className={styles.card}>
            <div className={styles.cardContent}>
              <div className={styles.header}>
                <Image
                  src={job.logo}
                  alt={`${job.company} logo`}
                  width={40}
                  height={40}
                  className={styles.logo}
                />
                <div>
                  <h4 className={styles.title}>{job.title}</h4>
                  <p className={styles.company}>{job.company}</p>
                </div>
              </div>
              <p className={styles.dates}>
                {job.start} – {job.end}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const WORK_EXPERIENCE: Experience[] = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Google - Google Payments",
    start: "May 2021",
    end: "Aug 2021",
    logo: "/gPay logo.png",
  },
  {
    id: 2,
    title: "Software Development Engineer Intern",
    company: "Amazon - AWS Document DB",
    start: "June 2022",
    end: "August 2022",
    logo: "/docdb_logo.jpg",
  },
  {
    id: 3,
    title: "Software Development Engineer",
    company: "Amazon - Prime Video",
    start: "Nov 2023",
    end: "Present",
    logo: "/pv_logo.png",
  },
];

type Experience = {
  id: number;
  title: string;
  company: string;
  start: string;
  end: string;
  logo: string;
};
