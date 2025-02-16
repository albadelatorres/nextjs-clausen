"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Dialog, DialogContent } from "../../components/ui/dialog";

export default function BilledGalleri() {
  // Get both the carousel ref and API
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  // Generate array of image pairs
  const imagePairs = Array.from({ length: 7 }, (_, i) => ({
    before: `/images/image${i}-before.jpeg`,
    after: `/images/image${i}-after.jpeg`,
  }));

  // Update selectedIndex when the carousel changes slides.
  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    emblaApi.on("select", onSelect);
    // Set the initial selected index.
    onSelect();
    return (): void => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-sage-50 to-sage-100 pt-24">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-sage-100 text-sage-700 text-sm font-medium">
            Se vores arbejde
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-sage-900 tracking-tight">
            Billedgalleri
          </h1>
          <p className="text-lg text-sage-700 max-w-2xl mx-auto">
            <span className="block mt-2 text-sage-700 text-sm">
              Klik på et billede for at se det i fuld størrelse.
            </span>
          </p>
        </motion.div>

        <div className="glass-panel rounded-2xl p-6 sm:p-8 max-w-5xl mx-auto">
          <div className="relative">
            {/* Carousel */}
            <div className="embla overflow-hidden rounded-xl" ref={emblaRef}>
              <div className="embla__container flex">
                {imagePairs.map((pair, index) => (
                  <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                      <div
                        className="relative rounded-lg overflow-hidden w-full cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() =>
                          setSelectedImage({ src: pair.before, alt: `Før billede ${index + 1}` })
                        }
                      >
                        <div
                          className="w-full"
                          style={{ position: "relative", height: "0", paddingBottom: "75%" }}
                        >
                          <Image
                            src={pair.before}
                            alt={`Før billede ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain"
                            priority={index === 0}
                          />
                        </div>
                        <div className="absolute top-4 left-4 bg-sage-900/80 text-white px-3 py-1 rounded-full text-sm">
                          Før
                        </div>
                      </div>
                      <div
                        className="relative rounded-lg overflow-hidden w-full cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() =>
                          setSelectedImage({ src: pair.after, alt: `Efter billede ${index + 1}` })
                        }
                      >
                        <div
                          className="w-full"
                          style={{ position: "relative", height: "0", paddingBottom: "75%" }}
                        >
                          <Image
                            src={pair.after}
                            alt={`Efter billede ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-contain"
                            priority={index === 0}
                          />
                        </div>
                        <div className="absolute top-4 left-4 bg-sage-500/80 text-white px-3 py-1 rounded-full text-sm">
                          Efter
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => emblaApi?.scrollPrev()}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-colors"
              aria-label="Previous slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-sage-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 hover:bg-opacity-100 transition-colors"
              aria-label="Next slide"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-sage-900"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {imagePairs.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  selectedIndex === index ? "bg-sage-600" : "bg-sage-200 hover:bg-sage-300"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="text-center space-y-4 mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-sage-100 text-sage-700 text-sm font-medium">
            Se mere
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-sage-900">Andre Projekter</h2>
          <p className="text-lg text-sage-700 max-w-2xl mx-auto">
            Udforsk flere af vores gennemførte projekter
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {["image1", "image2", "image3", "image4"].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
              className="glass-panel rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className="relative aspect-[4/3] cursor-pointer"
                onClick={() => setSelectedImage({ src: `/images/${img}.jpeg`, alt: `Projekt ${index + 1}` })}
              >
                <Image
                  src={`/images/${img}.jpeg`}
                  alt={`Projekt ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-sage-900/0 group-hover:bg-sage-900/20 transition-colors duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-sage-900 font-semibold">Projekt {index + 1}</h3>
                <p className="text-sage-600 text-sm mt-1">Klik for at se flere detaljer</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>


      {/* Fullscreen Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-screen-lg w-full h-[80vh] p-0 relative">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-2 right-2 z-20 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-colors"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          {selectedImage && (
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <style jsx global>{`
        .embla {
          --slide-spacing: 1rem;
          --slide-size: 100%;
        }
        .embla__container {
          backface-visibility: hidden;
          display: flex;
          touch-action: pan-y;
          margin-left: calc(var(--slide-spacing) * -1);
        }
        .embla__slide {
          flex: 0 0 var(--slide-size);
          min-width: 0;
          padding-left: var(--slide-spacing);
        }
      `}</style>
    </main>
  );
}