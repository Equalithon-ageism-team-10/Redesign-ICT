import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";

import ProgrammedChatBot from "../components/chatbot";

export default function Home() {
  const [bot, setBot] = useState(true);
  const windowName = "Redesign-ICT";

  return (
    <div className={styles.container}>
      <Head>
        <title>Redesign-ICT</title>
        <meta name={windowName} content="Chatbot and other design ideas for ICT" />
        <link rel="icon" href="/ict/ictLogo.png" />
      </Head>

      <main className={styles.main}>
        <div className={styles.storyBtn}>
          <Link href="/storypage">
            <a>Story</a>
          </Link>
        </div>
        <div>
          {bot ? (
            <div>
              <p className={styles.chatBotTitle}>Quiz</p>
              <ProgrammedChatBot bot={bot} setBot={setBot} windowName={windowName} />
            </div>
          ) : (
            <></>
          )}
        </div>
      </main>
    </div>
  );
}
