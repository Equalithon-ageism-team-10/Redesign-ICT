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
                  message: "Hi There! Would you like to talk about your career?",
                  trigger: "2",
                },
                {
                  id: "2",
                  options: [
                    { value: 1, label: "Let me tell you!", trigger: "4" },
                    { value: 2, label: "Not today.", trigger: "3" },
                  ],
                },
                {
                  id: "3",
                  message: "No worries! Chat soon!",
                  end: true,
                },
                {
                  id: "4",
                  message: "Awesome! How do you feel about work today?",
                  trigger: "5",
                },
                {
                  id: "5",
                  options: [
                    { value: 1, label: "Great!", trigger: "" },
                    { value: 2, label: "OK.", trigger: "" },
                    { value: 3, label: "Not Good", trigger: "6" },
                  ],
                },
                {
                  id: "6",
                  message: "Tomorrow will be better! How is your work-life balance?",
                  trigger: "7",
                },
                {
                  id: "7",
                  options: [
                    { value: 1, label: "Perfect!", trigger: "" },
                    { value: 2, label: "Its OK", trigger: "" },
                    { value: 3, label: "Help Me!", trigger: "8" },
                  ],
                },
                {
                  id: "8",
                  message: "Sorry to hear that. Do you like what you do?",
                  trigger: "9",
                },
                {
                  id: "9",
                  options: [
                    { value: 1, label: "100%", trigger: "" },
                    { value: 2, label: "Debatable", trigger: "10" },
                    { value: 3, label: "Not really", trigger: "" },
                  ],
                },
                {
                  id: "10",
                  message: "Understandable. Is there any growth in this career for you?",
                  trigger: "11",
                },
                {
                  id: "11",
                  options: [
                    { value: 1, label: "I'd like to", trigger: "" },
                    { value: 2, label: "Not Sure", trigger: "12" },
                    { value: 3, label: "Not really", trigger: "" },
                  ],
                },
                {
                  id: "12",
                  message: "It sounds like a career change might be good. What do you think?",
                  trigger: "13",
                },
                {
                  id: "13",
                  options: [
                    { value: 1, label: "Yes!!", trigger: "" },
                    { value: 2, label: "Not right now", trigger: "" },
                    { value: 3, label: "But how?", trigger: "14" },
                    { value: 4, label: "Isn't it too late?", trigger: "" },
                  ],
                },
                {
                  id: "14",
                  message:
                    "At ICT we have a 12-week career transition program. We go step-by-step with you through it",
                  trigger: "15",
                },
                {
                  id: "15",
                  message: "We also have 1:1 coaching so you're never alone.",
                  trigger: "16",
                },
                {
                  id: "16",
                  message: "Finally, check out our career library for free resources!",
                  trigger: "17",
                },
                {
                  id: "17",
                  options: [
                    {
                      value: 1,
                      label: "Program",
                      trigger: () => {
                        open("https://www.ictransitions.org/offerings/collaboratory/", "ICT Bot");
                      },
                    },
                    {
                      value: 2,
                      label: "1:1 Coach",
                      trigger: () => {
                        open("https://www.ictransitions.org/category/coaches/", "ICT Bot");
                      },
                    },
                    {
                      value: 3,
                      label: "Library",
                      trigger: () => {
                        open("https://www.ictransitions.org/library/", "ICT Bot");
                      },
                    },
                  ],
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
