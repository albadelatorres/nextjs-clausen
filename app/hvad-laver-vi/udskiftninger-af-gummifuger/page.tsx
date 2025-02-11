"use client";

import { motion } from "framer-motion";

export default function UdskiftningAfGummifugerPage() {
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
            Udskiftning af gummifuger
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto glass-panel rounded-2xl p-6 sm:p-8 space-y-6"
        >
          <p className="text-lg text-sage-800">
            Har dine gummifuger set bedre dage? Hos Fugemester Clausen er vi specialister i udskiftning af gummifuger, så dit hjem eller din virksomhed forbliver tæt, pænt og beskyttet mod fugt og slid.
          </p>

          <div>
            <p className="text-lg font-semibold text-sage-900 mb-4">
              Hvornår skal gummifuger udskiftes?
            </p>
            <p className="text-sage-700 mb-4">
              Gummifuger sikrer fleksibilitet og tæthed i overgange mellem materialer, men med tiden kan de blive hårde, revne eller løsne sig. Det er tid til udskiftning, hvis dine fuger:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sage-700 pl-4">
              <li>Er stive eller sprøde</li>
              <li>Har revner eller mangler stykker</li>
              <li>Er løse eller slipper underlaget</li>
              <li>Har misfarvning eller skimmel</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </main>
  );
}