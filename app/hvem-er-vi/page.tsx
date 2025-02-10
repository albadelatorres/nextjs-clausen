"use client";

import Head from "next/head";

export default function HvemErVi() {
  return (
    <>
      <Head>
        <title>Hvem er vi? - Fugemester Clausen</title>
        <meta 
          name="description" 
          content="Fugemester Clausen er din pålidelige partner inden for fugearbejde i Kolding og omegn. Vi leverer professionelle løsninger med fokus på kvalitet og holdbarhed." 
        />
      </Head>
      
      <main className="about-container">
        <h1>Hvem er vi?</h1>

        <p className="intro-text">
          <strong>Fugemester Clausen</strong> er din pålidelige partner inden for fugearbejde.  
          Vi leverer professionelle løsninger til fugning af døre, vinduer, badeværelser med mere i Kolding og omegn
        </p>

        <p className="highlight-text">
          Med fokus på <strong>kvalitet og holdbarhed</strong> sikrer vi tætte fuger, der beskytter dit hjem mod fugt og slid.
        </p>

        <p className="info-text">
          Uanset om det er <strong>nybyggeri</strong> eller <strong>renovering</strong>, er vi eksperter i præcision og effektivitet.  
          Vores mange års erfaring sikrer, at du får en løsning, der holder i længden.
        </p>

        <p className="cta-text">
        Kontakt Fugemester Clausen i dag for en uforpligtende snak om dit næste
fugeprojekt!
Vi leverer altid høj kvalitet og professionelt håndværk hele vejen igennem
– fra start til slut. Uanset opgavens størrelse står vi klar med ekspertise
og omhyggelig udførelse.
Lad os tage en snak om dine behov – vi glæder os til at hjælpe dig!
        </p>
      </main>

      <style jsx>{`
        .about-container {
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

        .cta-text {
          font-weight: bold;
          color: #d9534f;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}