import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

import ChatBot from "react-simple-chatbot";

export default function Home() {
  const [bot, setBot] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>ICT Bot</title>
        <meta name="ICT Bot" content="ICT Bot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          {bot ? (
            <ChatBot
              botAvatar="favicon.ico"
              steps={[
                {
                  id: "1",
                  message: "What number I am thinking?",
                  trigger: "2",
                },
                {
                  id: "2",
                  options: [
                    { value: 1, label: "Number 1", trigger: "4" },
                    { value: 2, label: "Number 2", trigger: "3" },
                    { value: 3, label: "Number 3", trigger: "3" },
                  ],
                },
                {
                  id: "3",
                  message: "Wrong answer, try again.",
                  trigger: "2",
                },
                {
                  id: "4",
                  message: "Awesome! You are a telepath!",
                  end: true,
                },
              ]}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div className={styles.botButton}>
          <div className={styles.botEmblem} onClick={() => setBot(!bot)}>
            ❖
          </div>
          Take A Quiz
        </div>
      </main>
    </div>
  );
}
