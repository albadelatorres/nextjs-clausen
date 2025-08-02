"use client";
import { motion } from "framer-motion";

export default function HvemErVi() {
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
            Om Os
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-sage-900 tracking-tight">
                        Hvem er vi?

          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-sage-800 tracking-tight">
                        Fugemester Clausen – dit lokale <strong className="font-semibold">fugefirma</strong> i Kolding

          </h2>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-8">

            {/* Hero Image (cropped) */}
            <div className="relative overflow-hidden rounded-2xl h-80 sm:h-96 md:h-[25rem]">
              <img
                src="/images/homephoto.jpg"
                alt="Fugemester Clausen udfører professionelt fugearbejde i Kolding"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6"
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-sage-900">
              Professionel fugearbejde i Kolding
            </h3>
            <p className="text-lg text-sage-800 leading-relaxed">
              <strong className="text-sage-900">Fugemester Clausen</strong> er dit foretrukne <strong className="font-semibold">fugefirma</strong> i Kolding og omegn samt Vejle, Fredericia og Middelfart. Vi tilbyder <strong className="font-semibold">professionel fugeservice</strong> til <strong className="font-semibold">vinduer</strong>, <strong className="font-semibold">døre</strong> og <strong className="font-semibold">vådrum</strong>.
            </p>
            <div className="border-l-4 border-sage-500 pl-6 py-2">
              <p className="text-lg text-sage-700">
                Med fokus på <strong className="text-sage-900">kvalitet og holdbarhed</strong> sikrer vi <strong className="font-semibold">tætte fuger</strong>, der beskytter dit hjem mod fugt og slid.
              </p>
            </div>
            <p className="text-lg text-sage-700">
              Uanset om det gælder <strong className="text-sage-800">nybyggeri</strong> eller <strong className="text-sage-800">renovering</strong>, leverer vi <strong className="font-semibold">præcist</strong> og <strong className="font-semibold">effektivt</strong> arbejde, der holder i længden.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel rounded-2xl p-6 sm:p-8 text-center space-y-4"
          >
            <p className="text-lg text-sage-700">
              <a href="/#kontakt" className="text-sage-800 underline hover:text-sage-900 transition-colors">
                Kontakt Fugemester Clausen
              </a>{" "}
              i dag for en uforpligtende snak om dit næste fugeprojekt!
            </p>
            <p className="text-sage-700">
              Vi leverer altid høj kvalitet og professionelt håndværk hele vejen igennem
              – fra start til slut. Uanset opgavens størrelse står vi klar med ekspertise
              og omhyggelig udførelse.
            </p>
            <p className="text-sage-700 font-medium">
              Lad os tage en snak om dine behov – vi glæder os til at hjælpe dig!
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}