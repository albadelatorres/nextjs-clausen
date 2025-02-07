"use client";

import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function BilledGalleri() {
  return (
    <>
      <Head>
        <title>Billedgalleri - Fugemester Clausen</title>
        <meta name="description" content="Se vores tidligere projekter i vores billedgalleri." />
      </Head>
      
      <main className="gallery-container">
        <h1>Billedgalleri</h1>
        <p>Oplev vores arbejde gennem et udvalg af billeder fra tidligere projekter.</p>
        
        <div className="carousel-wrapper">
          <Carousel 
            showArrows={true} 
            autoPlay={true} 
            infiniteLoop={true} 
            showThumbs={false} 
            showStatus={false}
          >
            <div>
              <img src="/images/gallery1.jpg" alt="Fugearbejde 1" />
              <p className="legend">Fugearbejde ved vinduer</p>
            </div>
            <div>
              <img src="/images/gallery2.jpg" alt="Fugearbejde 2" />
              <p className="legend">Specialprojekter</p>
            </div>
            <div>
              <img src="/images/gallery3.jpg" alt="Fugearbejde 3" />
              <p className="legend">Industriløsninger</p>
            </div>
          </Carousel>
        </div>
      </main>

      <style jsx>{`
        .gallery-container {
          text-align: center;
          padding: 4rem 2rem;
          background-color: #f7f7f7;
        }
        
        h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #333;
        }

        p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: #666;
        }

        .carousel-wrapper {
          max-width: 800px;
          margin: 0 auto;
        }

        .legend {
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 10px;
          font-size: 1rem;
          border-radius: 5px;
        }

        @media (max-width: 768px) {
          .gallery-container {
            padding: 2rem 1rem;
          }
          
          h1 {
            font-size: 2rem;
          }
          
          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}