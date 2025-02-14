"use client";

import { motion } from "framer-motion";

export default function GulvLoftPage() {
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
            Gulv/Loft
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto glass-panel rounded-2xl p-6 sm:p-8 space-y-6"
        >
          <p className="text-lg text-sage-800">
            Fugning af gulv og loft er en essentiel del af ethvert byggeri eller renoveringsprojekt. Det sikrer ikke kun et flot og færdigt resultat, men bidrager også til en bedre komfort og holdbarhed i dit hjem eller virksomhed.
          </p>

          <div>
            <p className="text-lg font-semibold text-sage-900 mb-4">Fordele ved korrekt fugning:</p>
            <table className="w-full text-sage-700">
              <tbody>
                <tr className="border-b border-sage-200">
                  <td className="py-2 pr-4 font-bold text-sage-900">Pæn finish:</td>
                  <td className="py-2">
                    Fugning skaber en glat og ensartet overgang mellem vægge, gulv og loft, hvilket giver et professionelt udseende.
                  </td>
                </tr>
                <tr className="border-b border-sage-200">
                  <td className="py-2 pr-4 font-bold text-sage-900">Bedre lydisolering:</td>
                  <td className="py-2">
                    Små sprækker kan lade lyd trænge igennem. Fugning hjælper med at dæmpe støj mellem rum og etager.
                  </td>
                </tr>
                <tr className="border-b border-sage-200">
                  <td className="py-2 pr-4 font-bold text-sage-900">Forlænger bygningens levetid:</td>
                  <td className="py-2">
                    Fugning forebygger revner og skader, der kan opstå på grund af temperaturændringer og bygningsbevægelser.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sage-700 font-medium">
            Ønsker du professionel fugning af høj kvalitet? Kontakt os i dag, og lad os tage en snak om hvordan vi kan hjælpe dig!
          </p>
        </motion.div>
      </div>
    </main>
  );
}