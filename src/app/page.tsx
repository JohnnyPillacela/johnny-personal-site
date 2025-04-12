import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />

        <Image
          src="/ecu-johnny.PNG"
          alt="johnny's animated photo"
          width={180}
          height={200}
          priority
        />

        <div className={styles.ctas}>

        </div> 

        <Footer />
      </main>
    </div>
  );
}
