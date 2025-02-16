"use client";

import { Card } from "@/components/ui/card";
import InteractiveColorWheel from "../../components/ui/InteractiveColorWheel";
import InteractiveColorWheelWetroom from "../../components/ui/InteractiveColorWheelWetroom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const services = [
  "Døre/Vinduer",
  "Gulv/Loft",
  "Badeværelser/Køkken/Bryggers",
  "Udskiftninger af gummifuger",
  "Dilations/Sandbestrøgede fuger "
];

// Simple slugify helper to convert service names into URL-friendly slugs.
const slugify = (str: string) => {
  return str
    .toLowerCase()
    .replace(/æ/g, "ae")
    .replace(/ø/g, "oe")
    .replace(/å/g, "aa")
    .replace(/\//g, "-") // replace slash with hyphen
    .replace(/\s+/g, "-") // replace spaces with hyphen
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
};

export default function HvadLaverVi() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  // State to toggle between the two wheels.
  const [activeWheel, setActiveWheel] = useState("fugemasse");

  return (
    <div className="min-h-screen bg-gradient-to-b from-sage-50 to-sage-100">
      <div className="container max-w-4xl mx-auto px-4 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <span className="inline-block px-4 py-1 rounded-full bg-sage-100 text-sage-700 text-sm font-medium animate-fade-in">
              Professionelt Fugearbejde
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-sage-900 tracking-tight">
              Hvad laver vi?
            </h1>
          </div>

          <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 animate-fade-in">
            <p className="text-lg text-sage-800 leading-relaxed">
              Når man skal fuge, er det vigtigt at produktet har de rette egenskaber.
              Hvor godt fugemassen tåler temperaturvariationer, UV-lys samt påvirkninger fra
              vand og kemikalier vil variere med produktets sammensætning og hvilken teknologi
              den er baseret på.
            </p>

            <div className="border-l-4 border-sage-500 pl-6 py-2">
              <p className="text-lg text-sage-700">
                Hos <span className="font-semibold">Fugemester Clausen</span> benytter vi derfor
                kun kvalitetsmaterialer og tilbyder elastisk fugearbejde indenfor følgende
                kategorier, både ved nybyggeri og renoveringsarbejder:
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-8">
            {services.map((service, index) => (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Wrap the card in a Link to make the whole card clickable */}
                <Link href={`/hvad-laver-vi/${slugify(service)}`}>
                  <Card className="hover-card p-6 bg-white/80 backdrop-blur border border-sage-200">
                    <h3 className="text-lg font-medium text-sage-800">{service}</h3>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="glass-panel rounded-2xl p-8 text-center space-y-6">
            <p className="text-lg text-sage-700">
              Fugemateriale fås i et bredt udvalg af typer, kvaliteter og farver. Til døre, vinduer,
              loft osv bruger vi en bemalbar højkvalitets fugemasse (MS-polymer) fra Soudal, en af
              Europas førende virksomheder indenfor branchen. Til vådrum som badeværelser, til
              køkkenbordplader osv bruger vi vådrumssilicone fra Dana Lim, Skandinaviens førende
              producent af bla. silicone.
            </p>
            <p className="text-lg text-sage-700">
              Vi tilbyder forskellige farver afhængigt af, om du vælger fugemasse eller vådrumssilicone.
              Skift mellem de to med knappen nedenfor for at se farveudvalget.
            </p>

            {/* Pill Toggle */}
            <div className="flex justify-center">
              <div className="inline-flex rounded-full border border-sage-300 overflow-hidden">
                <button
                  onClick={() => setActiveWheel("fugemasse")}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeWheel === "fugemasse"
                      ? "bg-sage-700 text-white"
                      : "bg-white text-sage-700"
                  }`}
                >
                  Fugemasse
                </button>
                <button
                  onClick={() => setActiveWheel("vadrumssilicone")}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeWheel === "vadrumssilicone"
                      ? "bg-sage-700 text-white"
                      : "bg-white text-sage-700"
                  }`}
                >
                  Vådrumssilicone
                </button>
              </div>
            </div>

            {/* Interactive Wheel */}
            <div className="wheel-wrapper">
              {activeWheel === "fugemasse" ? (
                <InteractiveColorWheel />
              ) : (
                <InteractiveColorWheelWetroom />
              )}
              <p className="wheel-caption">
                Her er de {activeWheel === "fugemasse" ? "fugemassefarver" : "vådrumssiliconefarver"}, vi arbejder med.
              </p>
            </div>

            <p className="text-sage-600">
              Fandt du ikke hvad du ledte efter? Kontakt os alligevel, så tager vi en snak om, hvordan vi kan hjælpe dig.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}