import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.page_title_h2}>
            <h2>Privacy Policy for Nalinia Health and Fitness App</h2>
        </div>
        <div className={styles.logo_container}>

        <Image
          className={styles.app_logo}
          src="/nalinia-app-logo.png"
          alt="Vercel logomark"
          width={120}
          height={120}
        />
        <h5 >Update date: 15 March 2025</h5>
        </div>
        <div className={styles.policy_container_div}>

          <div className={styles.policy_element}>
            <h4>1-Title</h4>
            <p>the privacy policy text, lorum isu ibd srtae etc ...the privacy policy text, lorum isu ibd srtae etc ...
            the privacy policy text, lorum isu ibd srtae etc ...the privacy policy text, lorum isu ibd srtae etc ...
            the privacy policy text, lorum isu ibd srtae etc ...the privacy policy text, lorum isu ibd srtae etc ...
            the privacy policy text, lorum isu ibd srtae etc ...the privacy policy text, lorum isu ibd srtae etc ...</p>
          </div>
          <div className={styles.policy_element}>
            <h4>1-Title</h4>
            <p>the privacy policy text, lorum isu ibd srtae etc ...</p>
          </div>
          <div className={styles.policy_element}>
            <h4>1-Title</h4>
            <p>the privacy policy text, lorum isu ibd srtae etc ...</p>
          </div>

          <div className={styles.policy_element}>
            <h4>1-Title</h4>
            <p>the privacy policy text, lorum isu ibd srtae etc ...</p>
          </div>

          <div className={styles.policy_element}>
            <h4>1-Title</h4>
            <p>the privacy policy text, lorum isu ibd srtae etc ...</p>
          </div>


        </div>





      </main>


      <footer className={styles.footer}>
        <a
          href="https://play.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/google-play.png"
            alt="google play"
            width={37}
            height={37}
          />
          Get this app on Google play
        </a>


      </footer>
    </div>
  );
}
