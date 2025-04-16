import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProfileImage from "./components/ProfileImage/ProfileImage";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <About />
        <ProfileImage />
        <Experience />

        <div className={styles.ctas}>

        </div> 

        <Footer />
      </main>
    </div>
  );
}
