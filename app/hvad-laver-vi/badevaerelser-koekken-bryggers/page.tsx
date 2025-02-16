"use client";

import { motion } from "framer-motion";

export default function BadevaerelserKokkenPage() {
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
            Badeværelser, Køkken og Bryggers
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto glass-panel rounded-2xl p-6 sm:p-8 space-y-8"
        >
          <p className="text-lg text-sage-800">
            Hos Fugemester Clausen ved vi, at en professionelt udført fuge ikke bare handler om udseende – det er en afgørende del af beskyttelsen af dit hjem.
            En korrekt fugning er afgørende for både holdbarhed, funktionalitet og det æstetiske udtryk.
          </p>

          <div>
            <p className="text-lg font-semibold text-sage-900 mb-4">Korrekt fugning i badeværelse, køkken og bryggers:</p>
            <table className="w-full text-sage-700">
              <tbody>
                <tr className="border-b border-sage-200">
                  <td className="py-2 pr-4 font-bold text-sage-900">Forebygger fugt- og vandskader:</td>
                  <td className="py-2">
                    Vand og damp er en daglig udfordring i både køkken og bad. Korrekt fugning forhindrer vand i at trænge ind i vægge og gulve, hvilket reducerer risikoen for skimmelsvamp, råd og strukturelle skader.
                  </td>
                </tr>
                <tr className="border-b border-sage-200">
                  <td className="py-2 pr-4 font-bold text-sage-900">Forlænger materialernes levetid:</td>
                  <td className="py-2">
                    Uden den rette fuge kan fugt og snavs nedbryde fliser, bordplader og vægge. En holdbar fuge beskytter kanterne og absorberer små bevægelser, så overflader forbliver pæne og funktionelle i mange år.
                  </td>
                </tr>
                <tr className="border-b border-sage-200">
                  <td className="py-2 pr-4 font-bold text-sage-900">Garanterer hygiejne og renhed:</td>
                  <td className="py-2">
                    Sprækker og utætte fuger kan samle snavs og bakterier. En korrekt udført
                    fuge gør rengøringen lettere og skaber et sundere indeklima. </td>
                </tr>
                <tr className="border-b border-sage-200">
                  <td className="py-2 pr-4 font-bold text-sage-900">Professionel finish:</td>
                  <td className="py-2">
                    Fugerne giver et pænt og ensartet look, der forbedrer hele rummets æstetik. Vi tilbyder flere farver og typer fugemasser, så du kan vælge den løsning, der passer bedst til dit projekt.
                  </td>
                </tr>
                <tr className="border-b border-sage-200">
                  <td className="py-2 pr-4 font-bold text-sage-900">Reducerer risikoen for revner:</td>
                  <td className="py-2">
                    Fliser og klinker kan med tiden bevæge sig. Fugemassen hjælper med at
                    optage disse bevægelser og mindsker risikoen for sprækker.                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="border-l-4 border-sage-500 pl-6 py-2">
            <p className="text-lg text-sage-700">
              Vi fuger de vigtigste områder:
              <br />
              <strong className="text-sage-900">Badeværelse:</strong> Omkring bruseniche, badekar, håndvask, toilet og fliser.
              <br />
              <strong className="text-sage-900">Køkken/Bryggers:</strong> Langs bordplader, skabe og mellem sokler, klinker og
              fliser.
              <br />
              <strong className="text-sage-900">Flisearbejde:</strong> Komplette fladeløsninger i både vådrum og tørre områder.
              <br />
              <strong className="text-sage-900">Skabe:</strong> Alle skabe fuldt dækket.
            </p>
          </div>

          <p className="text-sage-700">
            Husk at det er vigtigt at vedligeholde og udskifte fuger, når de bliver porøse eller beskadigede, for at sikre maksimal beskyttelse og æstetik i dit badeværelse og køkken.
          </p>

          <p className="text-sage-700 font-medium">
            Hos Fugemester Clausen bruger vi kun kvalitetsfugemasse, der matcher behovene i både våde og tørre områder. Kontakt os i dag for en professionel og holdbar løsning!
          </p>
        </motion.div>
      </div>
    </main>
  );
}