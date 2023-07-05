// pages/under-construction.js

import React from "react";
import Head from "next/head";

const UnderConstruction = () => {
  return (
    <section style={styles.main}>
    <div>
      <Head>
        <title>Under Construction - Find Me Office</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>Find Me Office</h1>
          <p style={styles.text}>We are building something amazing!</p>
          <p style={styles.text}>Our website is under construction.</p>
          <p style={styles.text}>Stay tuned for updates.</p>
          <p style={styles.text}>Developed by Fahad and Vania</p>
        </div>
      </div>
    </div>
    </section>
  );
};

const styles = {
main:{
    width:'100%',

},
    container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    background: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
    fontFamily: "'Open Sans', sans-serif",
  },
  content: {
    textAlign: "center",
    color: "#ffffff",
  },
  title: {
    fontSize: "4em",
    fontWeight: "700",
    marginBottom: "0.5em",
  },
  text: {
    fontSize: "1.5em",
    fontWeight: "300",
  },
};

export default UnderConstruction;
