import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import Head from "next/head";
import Particles from "react-tsparticles";
import options from "./particle-config.json";

const Home = () => {
  function getRandomNumber(maxNonInclusive) {
    return Math.floor(Math.random() * maxNonInclusive);
  }

  function getRandomQuote() {
    var quotesList = [
      "One dot, mothafucka!",
      "Whatever you're asking, the answer is: I'm amazing.",
      "If I let you make me nervous, then we can't get schwifty.",
      "Eek-barba-derkel! Somebody's gonna get laid in college!",
      "Eek-barba-derkel? That's a pretty fucked up 'ooh-la-la.'"
    ];
    return quotesList[getRandomNumber(quotesList.length)];
  }

  const [quote, setQuote] = useState("");
  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>one dot motha fucka</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.innerContainer}>
          <h1>Rick Says:</h1>
          <p>{quote}</p>
          <button
            onClick={function () {
              var newQuote = getRandomQuote();
              setQuote(newQuote);
            }}
          >
            ANOTHER QUOTE
          </button>
        </div>

        <Particles
          id="tsparticles"
          options={options}
          init={() => {}}
          loaded={() => {}}
        />
      </main>
    </div>
  );
};

export default Home;
