import styles from "../styles/StoryPage.module.css";
import Head from "next/head";

const StoryPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redesign-ICT-StoryPage</title>
        <meta name="Redesign-ICT-StoryPage" content="Marketing idea for ICT" />
        <link rel="icon" href="/ict/ictLogo.png" />
      </Head>

      <main className={styles.main}>Storypage</main>
    </div>
  );
};

export default StoryPage;
