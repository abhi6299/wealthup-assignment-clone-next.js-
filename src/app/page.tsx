import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Check Your Financial Health</title>
      </Head>

      <main className={styles.main}>
        {/* Header */}
        <h2 className={styles.title}>Check Your Financial Health</h2>
        <p>Use weathometer to get free report card for your finances within minutes</p>
        <div><Link href="/get-started" className={styles.button}> Get Started </Link></div>
        <br/><hr/>
        {/* Middle */}
        <div className={styles.middleParent}>
          <span className={styles.middleChild}><p>Expected Retirement Age</p>
          <p>Identify Mistakes</p></span>
          <span className={styles.middleChildImg}><img src="/image.jpg" alt="Financial Health Image" /></span>
          <span className={styles.middleChild}>
            <p>Personalised Road Map</p>
            <p>Tips to Improve</p>
          </span>
        </div>
        {/* Footer */}
        <hr/> <br/>
        <h3 className={styles.footerHeading}>How it works ?</h3>
        <div className={styles.footerSection}>
          <span>Answer Few questions</span> ---------------
          <span>Register using phone and OTP </span> ---------------
          <span>Get Report and personal roadmap </span>
        </div>
        <div><Link href="/get-started" className={styles.button}> Get Started </Link></div>
        <br/>
      </main>  
    </div>
  );
}
