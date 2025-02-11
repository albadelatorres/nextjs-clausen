"use client";

import { motion } from "framer-motion";

export default function SandbestroogedeFugerDilationfugerPage() {
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
            Serviceydelser
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-sage-900 tracking-tight">
            Sandbestrøgede fuger / Dilationsfuger
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto glass-panel rounded-2xl p-6 sm:p-8 space-y-6"
        >
          <p className="text-lg text-sage-800">
            Hos Fugemester Clausen er vi specialister i holdbare og fleksible fugeløsninger, der sikrer stabilitet og lang levetid for dine byggeprojekter. Vi tilbyder professionel udførelse af både sandbestrøgede fuger og dilationsfuger til en bred vifte af anvendelsesområder.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-sage-900 mb-4">Sandbestrøgede fuger – Perfekt til belægning</h2>
            <p className="text-sage-700 mb-4">
              Sandbestrøgede fuger anvendes primært i belægningsarbejde, hvor de skaber en solid og fleksibel forbindelse mellem fliser, brosten og andre materialer. Vores specialudviklede fugemasse kombineret med sand sikrer en flot, ensartet og slidstærk overflade.
            </p>

            <p className="font-semibold text-sage-900 mb-2">Fordele ved sandbestrøgede fuger:</p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-sage-700 pl-4">
              <li>Effektiv forebyggelse af ukrudt</li>
              <li>Øget stabilitet og holdbarhed</li>
              <li>Modstandsdygtighed over for slitage og belastning</li>
              <li>Fleksibilitet ved temperaturændringer</li>
            </ul>
          </div>

          <div className="border-l-4 border-sage-500 pl-6 py-2">
            <p className="text-lg text-sage-700">
              Vi anbefaler sandbestrøgede fuger til terrasser, indkørsler, gangarealer og andre belægninger, hvor et smukt og vedligeholdelsesvenligt resultat ønskes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-sage-900 mb-4">Dilationsfuger – Beskyttelse mod revner og skader</h2>
            <p className="text-sage-700 mb-4">
              Dilationsfuger, også kendt som ekspansionsfuger, er designet til at absorbere bevægelser i byggematerialer forårsaget af temperaturudsving, fugt og strukturel belastning. Vi anvender elastiske materialer som silikone, gummi og skum for optimal fleksibilitet.
            </p>

            <p className="font-semibold text-sage-900 mb-2">Hvorfor vælge dilationsfuger?</p>
            <ul className="list-disc list-inside mb-4 space-y-2 text-sage-700 pl-4">
              <li>Forebygger revner i bygningselementer</li>
              <li>Sikrer fleksibilitet i beton, murværk og træ</li>
              <li>Reducerer spændingsopbygning i materialer</li>
            </ul>
          </div>

          <p className="text-sage-700 font-medium">
            Uanset om du skal have udført fugning i et nyt byggeri eller ønsker renovering af eksisterende fuger, står Fugemester Clausen klar med professionel rådgivning og kvalitetsarbejde.
            Lad os hjælpe dig med at finde den bedste fugeløsning til dit projekt. Kontakt os i dag for en uforpligtende snak!
          </p>
        </motion.div>
      </div>
    </main>
  );
}