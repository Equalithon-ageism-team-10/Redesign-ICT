import styles from "../styles/StoryPage.module.css";
import Head from "next/head";
import Image from "next/image";
import cls from "classnames";

const StoryPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redesign-ICT-StoryPage</title>
        <meta name="Redesign-ICT-StoryPage" content="Marketing idea for ICT" />
        <link rel="icon" href="/ict/ictLogo.png" />
      </Head>

      <main className={styles.main}>
        <h1>ICT Metamorphosis (Unfinished Idea)</h1>
        <div className={cls("glass", styles.card)}>
          <Image
            src="/butterfly/caterpillar.png"
            width="256"
            height="256"
            alt="caterpillar image"
          />
        </div>
        <div className={cls("glass", styles.card)}>
          <Image src="/butterfly/pupa.png" width="128" height="256" alt="pupa image" />
        </div>
        <div className={cls("glass", styles.card)}>
          <Image src="/butterfly/butterfly.png" width="256" height="256" alt="butterfly image" />
        </div>
      </main>
    </div>
  );
};

export default StoryPage;
