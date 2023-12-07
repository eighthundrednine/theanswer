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
      "One dot, mothafucka! - Rick",
      "Whatever you're asking, the answer is: I'm amazing. - Rick",
      "If I let you make me nervous, then we can't get schwifty. - Rick",
      "Eek-barba-derkel? That's a pretty fucked up 'ooh-la-la.' - Rick",
      "If I die in a cage, I lose a bet. - Rick"
    ];
    return quotesList[getRandomNumber(quotesList.length)];
  }

  const [quote, setQuote] = useState("");

    // Guarantees randomness of quote for each subsequent quote
  function getNextQuote() {
    let chosenQuote = getRandomQuote();
    while(quote === chosenQuote){
      chosenQuote = getRandomQuote();
    }

    return chosenQuote;
  }


  
  useEffect(() => {
    setQuote(getNextQuote());
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>whatever you&apos;re asking</title>
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
          <h1>QUOTES TO LETTER</h1>
          <p>{quote}</p>
          <button
            onClick={function () {
              var newQuote = getNextQuote();
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
