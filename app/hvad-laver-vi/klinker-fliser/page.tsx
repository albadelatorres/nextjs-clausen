"use client";

import { motion } from "framer-motion";

export default function KlinkerFliserPage() {
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
            Klinker/Fliser
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto glass-panel rounded-2xl p-6 sm:p-8 space-y-6"
        >
          <p className="text-lg text-sage-800">
            En korrekt fugning er afgørende for både holdbarhed, funktionalitet og det æstetiske udtryk. Her er de vigtigste grunde til, at fugning af fliser og klinker ikke må overses:
          </p>

          <table className="w-full text-sage-700">
            <tbody>
              <tr className="border-b border-sage-200">
                <td className="py-2 pr-4 font-bold text-sage-900">Beskytter mod fugt:</td>
                <td className="py-2">
                  Fugemassen skaber en vandtæt barriere, der forhindrer vand i at trænge ned i underlaget – særligt vigtigt i badeværelser, køkkener og andre vådrum.
                </td>
              </tr>
              <tr className="border-b border-sage-200">
                <td className="py-2 pr-4 font-bold text-sage-900">Forlænger flisernes levetid:</td>
                <td className="py-2">
                  Uden fuger kan fliser gnide mod hinanden og få skader. Korrekt fugning beskytter kanterne og absorberer små bevægelser, så fliserne holder længere.
                </td>
              </tr>
              <tr className="border-b border-sage-200">
                <td className="py-2 pr-4 font-bold text-sage-900">Forhindrer skimmel og snavs:</td>
                <td className="py-2">
                  Fugning lukker mellemrummene mellem fliserne og gør det sværere for skidt og bakterier at samle sig. Det gør rengøringen nemmere og sikrer et sundere indeklima.
                </td>
              </tr>
              <tr className="border-b border-sage-200">
                <td className="py-2 pr-4 font-bold text-sage-900">Giver en flot finish:</td>
                <td className="py-2">
                Fugerne giver et pænt og ensartet look, der forbedre hele rummets æstetik. Vi tilbyder flere farver og typer fugemasser, så du kan vælge den løsning, der passer bedst til dit projekt.
                </td>
              </tr>
              <tr className="border-b border-sage-200">
                <td className="py-2 pr-4 font-bold text-sage-900">Reducerer risikoen for revner:</td>
                <td className="py-2">
                  Fugemassen hjælper med at optage bevægelser i fliser og underlag, hvilket mindsker risikoen for sprækker.
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-bold text-sage-900">Øger skridsikkerheden:</td>
                <td className="py-2">
                  I våde områder kan fuger skabe mere friktion, så risikoen for at glide reduceres.
                </td>
              </tr>
            </tbody>
          </table>

          <p className="text-sage-700 font-medium">
            Ønsker du professionel fugning, der holder i mange år? Kontakt Fugemester Clausen i dag for et uforpligtende tilbud!
          </p>
        </motion.div>
      </div>
    </main>
  );
}