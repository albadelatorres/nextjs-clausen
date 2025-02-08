"use client"
import { Card } from "@/components/ui/card";
import InteractiveColorWheel from "../../components/ui/InteractiveColorWheel";
import { motion } from "framer-motion";
import { useEffect } from "react";

const services = [
    "Døre",
    "Vinduer",
    "Badeværelser",
    "Klinker",
    "Køkken",
    "Sandbestrøede fuger",
    "Dilationfuger",
    "Udskiftninger af gummi fuger",
];

export default function HvadLaverVi() {
    useEffect(() => {
        // Smooth scroll behavior
        document.documentElement.style.scrollBehavior = "smooth";
        return () => {
            document.documentElement.style.scrollBehavior = "auto";
        };
    }, []);

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
                            Hvor godt fugemassen tåler temperaturvariationer, UV-lys samt
                            påvirkninger fra vand og kemikalier vil variere med produktets
                            sammensætning og hvilken teknologi den er baseret på.
                        </p>

                        <div className="border-l-4 border-sage-500 pl-6 py-2">
                            <p className="text-lg text-sage-700">
                                Hos <span className="font-semibold">Fugemester Clausen</span> benytter
                                vi derfor kun kvalitetsmaterialer og tilbyder elastisk fugearbejde
                                indenfor følgende kategorier, både ved nybyggeri og
                                renoveringsarbejder:
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
                                <Card className="hover-card p-6 bg-white/80 backdrop-blur border border-sage-200">
                                    <h3 className="text-lg font-medium text-sage-800">{service}</h3>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    <div className="glass-panel rounded-2xl p-8 text-center space-y-6">
                        <p className="text-lg text-sage-700">
                            Fugemateriale kommer i mange farver, så kontakt os, og vi finder
                            sammen den der passer bedst til dit projekt.
                        </p>
                        <div className="wheel-wrapper">
                            <InteractiveColorWheel />
                            <p className="wheel-caption">
                                Her er de farver, vi arbejder med.
                            </p>
                        </div>
                        <p className="text-sage-600 italic">
                            Fandt du ikke hvad du ledte efter? Kontakt os alligevel, så tager vi
                            en snak om, hvordan vi kan hjælpe dig.
                        </p>
                    </div>

                </motion.div>
            </div>
        </div>
    );
}