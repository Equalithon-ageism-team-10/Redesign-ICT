import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

import ProgrammedChatBot from "../components/chatbot";

export default function Home() {
  const [bot, setBot] = useState(true);
  const windowName = "Redesign-ICT";

  return (
    <div className={styles.container}>
      <Head>
        <title>Redesign-ICT</title>
        <meta name={windowName} content="Chatbot and other design ideas for ICT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          {bot ? (
            <div>
              <p className={styles.chatBotTitle}>Quiz?</p>
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
