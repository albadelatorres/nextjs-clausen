"use client";

import Head from "next/head";

export default function HvadLaverVi() {
  return (
    <>
      <Head>
        <title>Hvad laver vi? - Fugemester Clausen</title>
        <meta 
          name="description" 
          content="Vi tilbyder elastisk fugearbejde med kvalitetsmaterialer til forskellige områder som døre, badeværelser, gulv/loft og mere." 
        />
      </Head>
      
      <main className="services-container">
        <h1>Hvad laver vi?</h1>

        <p className="intro-text">
          Når man skal fuge, er det vigtigt at produktet har de rette egenskaber. 
          Hvor godt fugemassen tåler temperaturvariationer, UV-lys samt påvirkninger fra vand og kemikalier 
          vil variere med produktets sammensætning og hvilken teknologi den er baseret på.
        </p>

        <p className="highlight-text">
          Hos <strong>Fugemester Clausen</strong> benytter vi derfor kun kvalitetsmaterialer og tilbyder elastisk 
          fugearbejde indenfor følgende kategorier, både ved nybyggeri og renoveringsarbejder:
        </p>

        <ul className="services-list">
          <li>Døre/Vinduer</li>
          <li>Badeværelser</li>
          <li>Gulv/loft</li>
          <li>Omfugning</li>
          <li>Finish fugning</li>
        </ul>

        <p className="info-text">
          Fugemateriale kommer i mange farver, så kontakt os, og vi finder sammen den der passer bedst til dit projekt.
        </p>

        <p className="cta-text">
          Fandt du ikke hvad du ledte efter? Kontakt os alligevel, så tager vi en snak om, hvordan vi kan hjælpe dig.
        </p>
      </main>

      <style jsx>{`
        .services-container {
          text-align: center;
          padding: 4rem 2rem;
          background-color: #f7f7f7;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #0056b3;
        }

        .intro-text,
        .highlight-text,
        .info-text,
        .cta-text {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .highlight-text {
          font-weight: bold;
          color: #444;
        }

        .services-list {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
        }

        .services-list li {
          font-size: 1.3rem;
          padding: 0.75rem 0;
          font-weight: bold;
          background: #0056b3;
          color: white;
          border-radius: 5px;
          margin: 0.5rem auto;
          width: 60%;
        }

        .cta-text {
          font-weight: bold;
          color: #d9534f;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }

          .services-list li {
            width: 80%;
          }
        }
      `}</style>
    </>
  );
}