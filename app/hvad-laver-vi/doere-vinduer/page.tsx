"use client";

import { motion } from "framer-motion";

export default function DoreVinduerPage() {
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
            Vinduer/Døre
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto glass-panel rounded-2xl p-6 sm:p-8 space-y-6"
        >
          <p className="text-lg text-sage-800">
            Fugning af døre og vinduer er en vigtig del af både vedligeholdelse og energieffektivitet i hjemmet.
            En korrekt fuge sikrer en tæt forsegling mellem dør- eller vinduesrammen og væggen, hvilket giver flere fordele:
          </p>
          <table className="w-full text-sage-700">
            <tbody>
              <tr className="border-b border-sage-200">
                <td className="py-2 pr-4 font-bold text-sage-900">Bedre energieffektivitet:</td>
                <td className="py-2">
                  En tæt fuge forhindrer varmetab og sikrer, at der ikke slipper kulde ind om vinteren, hvilket reducerer varmeregningen og skaber et behageligt indeklima.
                </td>
              </tr>
              <tr className="border-b border-sage-200">
                <td className="py-2 pr-4 font-bold text-sage-900">Undgå træk og kulde:</td>
                <td className="py-2">
                  Utætte døre og vinduer kan skabe træk, hvilket gør hjemmet koldere og mindre komfortabelt – især i vintermånederne.
                </td>
              </tr>
              <tr className="border-b border-sage-200">
                <td className="py-2 pr-4 font-bold text-sage-900">Beskyt mod fugt og skimmel:</td>
                <td className="py-2">
                  Fugning forhindrer, at regn og fugt trænger ind i væggen, hvilket reducerer risikoen for skimmelvækst og strukturelle skader.
                </td>
              </tr>
              <tr className="border-b border-sage-200">
                <td className="py-2 pr-4 font-bold text-sage-900">Lydisolering:</td>
                <td className="py-2">
                  En god fuge hjælper med at dæmpe lydene udefra og giver et roligere hjem.
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-sage-900">Pæn finish og længere holdbarhed:</td>
                <td className="py-2">
                  En veludført fugning giver et flot finish og beskytter døre og vinduer mod vejrets påvirkning, hvilket forlænger deres levetid.
                </td>
              </tr>
            </tbody>
          </table>

          <div className="border-l-4 border-sage-500 pl-6 py-2">
            <p className="text-lg text-sage-700">
              Fuger holder ikke evigt! Hvis du ser revner, misfarvninger eller mærker træk, er det tid til at få dem tjekket og eventuelt fornyet.
            </p>
          </div>

          <p className="text-sage-700 font-medium">
            Har du brug for hjælp? Kontakt os i dag for professionel fugning af dine døre og vinduer!
          </p>
        </motion.div>
      </div>
    </main>
  );
}