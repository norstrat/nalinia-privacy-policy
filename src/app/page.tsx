import Image from "next/image";
import styles from "./page.module.css";

import appLogo from "../../public/nalinia-app-logo.png";
import googlePlayLogo from "../../public/google-play.png";

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
          src={appLogo}
          alt="Vercel logomark"
          width={120}
          height={120}
        />
        <h5 >Update date: 17 March 2025</h5>
        <div className={styles.privacy_intro_text}>
          <p>Welcome to <strong>Nalinia: Health and Fitness</strong>!
          Your privacy is important to us. This Privacy Policy explains how we collect,
          use, and protect information in our mobile application <strong>Nalinia: Health and Fitness</strong> (the "App").</p>

        </div>

        </div>

  
          <div >
    <div className={styles.policy_container_div}>
      <h2>1. Information We Collect</h2>
      <div className={styles.policy_element}>
        <h3>1.1 Data Automatically Collected</h3>
        <div className={styles.policy_elem_embaded}>
          <p>Our app may collect limited data automatically for functionality and analytics, including:</p>
          <ul>
              <li><strong>Device Information:</strong> Basic technical information (such as device type, OS version, and unique device identifiers) to improve app performance.</li>
              <li><strong>Usage Data:</strong> Interactions with the app to optimize the user experience (e.g., app crashes, feature usage).</li>
          </ul>
          </div>
        </div>
        <div className={styles.policy_element}>
          <h3>1.2 Health & Fitness Data</h3>
          <div className={styles.policy_elem_embaded}>
          <p>Our app requires access to motion sensors to track walking and running activities. This data is only used locally on your device for step tracking and fitness calculations. <strong>We do not collect, store, or share any fitness-related data</strong> with third parties.</p>
          <br />
          <p>Users must grant permission for activity recognition before step tracking can function. You can revoke this permission anytime through your device settings.
          </p>
          </div>
        </div>
        <div className={styles.policy_element}>
          <h3>1.3 Ad-Related Data (Google AdMob)</h3>
            <div className={styles.policy_elem_embaded}>
              <p>We use <strong>Google AdMob</strong> to display advertisements.</p>
              <ul>
                  <li>AdMob may collect <strong>device identifiers</strong> for <strong>ad personalization</strong>.</li>
                  <li>Users can opt out of personalized ads by visiting <a href="https://adssettings.google.com/">Google Ads Settings</a>.</li>
                  <li>Learn more about Google’s data collection practices <a href="https://policies.google.com/privacy">here</a>.</li>
              </ul>
            </div>
            
        </div>
          
          <div className={styles.policy_element}>
            <h3>1.4 Firebase Data (Crash Reports & Analytics)</h3>
            <div className={styles.policy_elem_embaded}>
              <p>We use <strong>Google Firebase</strong> for app analytics and crash reporting.</p>
              <ul>
                  <li>Firebase may collect <strong>anonymized data</strong> about app usage and performance, including crash logs.</li>
                  <li>Firebase may collect <strong>device identifiers</strong> to associate app usage with specific sessions.</li>
                  <li>Learn more about Firebase’s data practices <a href="https://firebase.google.com/support/privacy">here</a>.</li>
              </ul>
            </div>
            
          </div>
          
      
    </div>

    <div className={styles.policy_container_div}>
    <h2>2. Permissions We Use & Why</h2>
    <div className={styles.policy_elem_embaded}>
      <p>Our app requires certain permissions to function correctly. Below is an explanation of why each permission is needed:</p>
      <ul>
          <li><strong>ACCESS_COARSE_LOCATION & ACCESS_FINE_LOCATION:</strong> Used for location-based fitness tracking.</li>
          <li><strong>ACTIVITY_RECOGNITION:</strong> Required to track steps and detect walking/running activity.</li>
          <li><strong>FOREGROUND_SERVICE & WAKE_LOCK:</strong> Ensures step tracking and reminders work even when the app is in the background.</li>
          <li><strong>POST_NOTIFICATIONS:</strong> Sends health reminders (e.g., water intake, medication alerts).</li>
          <li><strong>SCHEDULE_EXACT_ALARM & RECEIVE_BOOT_COMPLETED:</strong> Schedules health-related reminders and ensures they persist after a reboot.</li>
          <li><strong>INTERNET & ACCESS_NETWORK_STATE:</strong> Required for ads, updates, and cloud-based services.</li>
          <li><strong>READ_EXTERNAL_STORAGE & WRITE_EXTERNAL_STORAGE:</strong> Allows users to save fitness-related data.</li>
          <li><strong>BILLING & CHECK_LICENSE:</strong> Enables in-app purchases (e.g., ad-free experience).</li>
          <li><strong>AD_ID:</strong> Used by Google AdMob for advertising purposes.</li>
      </ul>
    </div>

    </div>
    
    <div className={styles.policy_container_div}>
      <h2>3. Data Safety & Sharing</h2>
      <div className={styles.policy_elem_embaded}>
        <ul>
            <li><strong>Health & Fitness Data:</strong> No health or fitness data is collected, stored, or shared by us. This data stays <strong>locally on your device</strong>.</li>
            <li><strong>Ad-Related Data:</strong> If personalized ads are enabled, <strong>Google AdMob</strong> may process device identifiers for ad personalization.</li>
            <li><strong>Firebase:</strong> Firebase may collect anonymized app usage data for <strong>analytics</strong> and <strong>crash reporting</strong>.</li>
            <li><strong>We do not sell or share any personal data with third parties</strong>.</li>
            <li><strong>Data Security:</strong> Data is <strong>encrypted in transit</strong> using HTTPS to ensure your privacy.</li>
        </ul>
      </div>

    </div>
    
    <div className={styles.policy_container_div}>
      <h2>4. How to Manage Your Data & Permissions</h2>
      <div className={styles.policy_elem_embaded}>
        <ul>
            <li>You can manage or revoke app permissions in your device settings.</li>
            <li>To opt out of personalized ads, visit <a href="https://adssettings.google.com/">Google Ads Settings</a>.</li>
        </ul>
        <h3>Data Deletion</h3>
        <div className={styles.policy_elem_embaded}>
          <strong>Google Firebase:</strong> If you would like to delete your Firebase data, you can delete your Firebase account, which will delete all associated data. <br />
          <strong>Google AdMob:</strong> If you want to stop personalized ads, you can opt out via <a href="https://adssettings.google.com/">Google Ads Settings</a>. <br />
          <strong>Device Data:</strong> Users can delete their data by uninstalling the app.
        </div>
      
      </div>

    </div>
    
    <div className={styles.policy_container_div}>
      <h2>5. Third-Party Services</h2>
      <div className={styles.policy_elem_embaded}>
        <ul>
            <li><strong>Google AdMob:</strong> For ads and monetization.</li>
            <li><strong>Google Firebase:</strong> For analytics and crash reporting.</li>
        </ul>
      </div>
      
    </div>
    
       

    
    <div className={styles.policy_container_div}>
      <h2>6. Children's Privacy</h2>
      <div className={styles.policy_elem_embaded}>
        <p>Our app is not intended for children under 13 years of age. We do not knowingly collect any personal data from children.</p>
      </div>

    </div>
    
    <div className={styles.policy_container_div}>
      <h2>7. Changes to This Privacy Policy</h2>
      <div className={styles.policy_elem_embaded}>
      <p>We may update this policy periodically based on updates we make to the app. Any changes will be posted in this section with an updated date.</p>

      </div>

    </div>
    
    <div className={styles.policy_container_div}>
      <h2>8. Contact Us</h2>
      <div className={styles.policy_elem_embaded}>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>📧 Email: norstrat88@gmail.com</p>
      </div>
      
    </div>
    
      </div>







      </main>
       


      <footer className={styles.footer}>
        <a
          href="https://play.google.com/store/apps/details?id=com.nalinia.healthandfitness"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src={googlePlayLogo}
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
