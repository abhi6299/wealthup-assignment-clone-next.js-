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
        <h2 className={styles.title}>Check your financial health</h2>
        <div className={styles.subheading}>
          <p>Use weathometer to get free report</p>
          <p>card for your finances within minutes</p>
        </div>
        <div><Link href="/get-started" className={styles.button}> Get Started </Link></div>
        <br/>
        {/* Middle */}
        <div className={styles.middleParent}>
          <span className={styles.middleChild}>
            <div><span><img src="/checkk.svg"></img></span><p>Expected Retirement Age</p> </div>
            <div><span><img src="/checkk.svg"></img></span><p>Identify Mistakes</p> </div>
          </span>
          <span className={styles.middleChildImg}><img src="/image.jpg" alt="Financial Health Image" /></span>
          <span className={styles.middleChild}>
            <div><span><img src="/checkk.svg"></img></span><p>Personalized Road Map</p> </div>
            <div><span><img src="/checkk.svg"></img></span><p>Tips to Improve</p> </div>
          </span>
        </div>
        {/* Footer */}
        <br/>
        <div className={styles.footer}>
          <h3 className={styles.footerHeading}>How it works ?</h3>
          <div className={styles.footerSectionIcons}>
            <span><img src="/file-regular.svg"></img><div className={styles.dot}>1</div></span> 
            <span>-----------------------------------------</span>
            <span><img src="/passport-solid.svg"></img><div className={styles.dot}>2</div></span>
            <span>-----------------------------------------</span>
            <span><img src="/file-invoice-solid.svg"></img><div className={styles.dot}>3</div></span>
          </div>
          <div className={styles.footerSection}>
            <span>Answer Few questions</span>
            <span>Register using phone and OTP </span>
            <span>Get Report and personal roadmap </span>
          </div>
          <div><Link href="/get-started" className={styles.button}> Get Started </Link></div>
          <br/>
        </div>
      </main>  
    </div>
  );
}
