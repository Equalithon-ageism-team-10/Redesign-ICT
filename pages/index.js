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
                    { value: 1, label: "Great!", trigger: "18" },
                    { value: 2, label: "OK.", trigger: "19" },
                    { value: 3, label: "Not Good", trigger: "6" },
                  ],
                },
                {
                  id: "6",
                  message: "Tomorrow will be better! How is your work-life balance?",
                  trigger: "7",
                },
                {
                  id: "18",
                  message: "That's awesome to hear! How is your work-life balance?",
                  trigger: "7",
                },
                {
                  id: "19",
                  message: "That's good to hear! How is your work-life balance?",
                  trigger: "7",
                },
                {
                  id: "7",
                  options: [
                    { value: 1, label: "Perfect!", trigger: "20" },
                    { value: 2, label: "Its OK", trigger: "21" },
                    { value: 3, label: "Help Me!", trigger: "8" },
                  ],
                },
                {
                  id: "8",
                  message: "Sorry to hear that. Do you like what you do?",
                  trigger: "9",
                },
                {
                  id: "20",
                  message: "Excellent! Do you like what you do?",
                  trigger: "9",
                },
                {
                  id: "21",
                  message: "Could be better. Do you like what you do?",
                  trigger: "9",
                },
                {
                  id: "9",
                  options: [
                    { value: 1, label: "100%", trigger: "22" },
                    { value: 2, label: "Debatable", trigger: "10" },
                    { value: 3, label: "Not really", trigger: "23" },
                  ],
                },
                {
                  id: "10",
                  message: "Understandable. Is there any growth in this career for you?",
                  trigger: "11",
                },
                {
                  id: "22",
                  message: "Even better! Is there any growth in this career for you?",
                  trigger: "11",
                },
                {
                  id: "23",
                  message: "Hm. Is there any growth in this career for you?",
                  trigger: "11",
                },
                {
                  id: "11",
                  options: [
                    { value: 1, label: "Yes!", trigger: "24" },
                    { value: 2, label: "Not Sure", trigger: "25" },
                    { value: 3, label: "Not really", trigger: "12" },
                  ],
                },
                {
                  id: "12",
                  message: "It sounds like a career change might be good. What do you think?",
                  trigger: "13",
                },
                {
                  id: "24",
                  message:
                    "It sounds like you're happy with your career! Are you interested in changing it?",
                  trigger: "13",
                },
                {
                  id: "25",
                  message:
                    "It sounds like you're unsure about your career! Are you interested in changing it?",
                  trigger: "13",
                },
                {
                  id: "13",
                  options: [
                    { value: 1, label: "Yes!!", trigger: "14" },
                    { value: 2, label: "Not right now", trigger: "26" },
                    { value: 3, label: "But how?", trigger: "14" },
                    { value: 4, label: "Isn't it too late?", trigger: "28" },
                  ],
                },
                {
                  id: "26",
                  message:
                    "No worries! Check out our free career library to help you on your career path!",
                  trigger: "27",
                },
                {
                  id: "27",
                  options: [
                    {
                      value: 1,
                      label: "Career Library",
                      trigger: () => {
                        open("https://www.ictransitions.org/library/", "ICT Bot");
                        setBot(!bot);
                      },
                    },
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
                        setBot(!bot);
                      },
                    },
                    {
                      value: 2,
                      label: "1:1 Coach",
                      trigger: () => {
                        open("https://www.ictransitions.org/category/coaches/", "ICT Bot");
                        setBot(!bot);
                      },
                    },
                    {
                      value: 3,
                      label: "Library",
                      trigger: () => {
                        open("https://www.ictransitions.org/library/", "ICT Bot");
                        setBot(!bot);
                      },
                    },
                  ],
                },
                {
                  id: "28",
                  message: "Of course not! You add so much value and experience.",
                  trigger: "29",
                },
                {
                  id: "29",
                  message:
                    "At ICT we can help you transition careers with our 12-week program. We go step-by-step with you through it",
                  trigger: "30",
                },
                {
                  id: "30",
                  message: "We also have 1:1 coaching so you're never alone.",
                  trigger: "31",
                },
                {
                  id: "31",
                  message: "How does that sound?",
                  trigger: "32",
                },
                {
                  id: "32",
                  options: [
                    {
                      value: 1,
                      label: "Career Program",
                      trigger: () => {
                        open("https://www.ictransitions.org/offerings/collaboratory/", "ICT Bot");
                        setBot(!bot);
                      },
                    },
                    {
                      value: 2,
                      label: "1:1 Coaching",
                      trigger: () => {
                        open("https://www.ictransitions.org/category/coaches/", "ICT Bot");
                        setBot(!bot);
                      },
                    },
                    {
                      value: 3,
                      label: "Contact Us",
                      trigger: () => {
                        open("https://www.ictransitions.org/about/leadership/", "ICT Bot");
                        setBot(!bot);
                      },
                    },
                    {
                      value: 4,
                      label: "No thanks",
                      trigger: () => {
                        setBot(!bot);
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
