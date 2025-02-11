"use client";

import Head from "next/head";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  // Estado para almacenar los valores del formulario
  const [formData, setFormData] = useState({
    navn: "",
    email: "",
    telefon: "",
    postnummer: "",
    besked: "",
  });

  // Estado para controlar si cada campo ya fue “interactuado”
  const [touched, setTouched] = useState({
    navn: false,
    email: false,
    telefon: false,
    postnummer: false,
    besked: false,
  });

  // Función para validar el formato de email
  const isValidEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  // Función que devuelve un objeto con los errores (cadena vacía = sin error)
  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.navn.trim()) {
      errors.navn = "Navn er obligatorisk";
    }
    if (!formData.email.trim()) {
      errors.email = "Email er obligatorisk";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Email format er ugyldigt";
    }
    if (!formData.telefon.trim()) {
      errors.telefon = "Telefon er obligatorisk";
    }
    if (!formData.postnummer.trim()) {
      errors.postnummer = "Postnummer er obligatorisk";
    }
    if (!formData.besked.trim()) {
      errors.besked = "Besked er obligatorisk";
    }
    return errors;
  };

  // Se calculan los errores en cada renderizado
  const errors = validate();

  // Manejador para cambios en los inputs y textarea
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejador para marcar campos como "touched"
  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // Manejador del envío del formulario
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Marcar todos los campos como tocados
    setTouched({
      navn: true,
      email: true,
      telefon: true,
      postnummer: true,
      besked: true,
    });

    // Si existen errores, no se envía el formulario
    if (Object.keys(errors).length > 0) {
      return;
    }

    alert("Tak for din besked. Vi kontakter dig snarest.");
    // Reiniciar el formulario
    setFormData({
      navn: "",
      email: "",
      telefon: "",
      postnummer: "",
      besked: "",
    });
    setTouched({
      navn: false,
      email: false,
      telefon: false,
      postnummer: false,
      besked: false,
    });
  };

  return (
    <>
      <Head>
        <title>Fugemester Clausen | Professionel fugning</title>
        <meta
          name="description"
          content="Fugemester Clausen tilbyder professionel fugearbejde. Kontakt os i dag for en uforpligtende snak om dit næste fugeprojekt. Vi
sikrer et professionelt resultat fra start til slut!"
        />
      </Head>
      <main className="bg-gradient-to-b from-sage-50 to-sage-100">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-sage-900/70 to-sage-800/70">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="container mx-auto px-4 h-full flex items-center justify-center"
            >
              <div className="text-center max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Velkommen til Fugemester Clausen
                </h1>
                <p className="text-xl text-white/90 mb-8">
                  Få professionel fugning til konkurrencedygtige priser – vi beskytter dit hjem med moderne teknologi og præcision.
                </p>
                <Link 
                  href="/#kontakt" 
                  className="inline-block px-8 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors duration-200"
                >
                  Få et uforpligtende tilbud
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Service Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Hvem er vi",
                  description: "Vi leverer kvalitetsfugning til både nybyggeri og renovering. Vores styrker er præcision, pålidelighed og en jordnær tilgang – det er derfor, vores kunder vælger os.",
                  href: "/hvem-er-vi"
                },
                {
                  title: "Hvad laver vi",
                  description: "Vi tilbyder et bredt udvalg af fugearbejde – fra vinduer og døre til badeværelser og specialprojekter.",
                  href: "/hvad-laver-vi"
                },
                {
                  title: "Billedgalleri",
                  description: "Udforsk vores galleri og se eksempler på vores præcise og kvalitetsbevidste fugearbejde.",
                  href: "/billedgalleri"
                }
              ].map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-panel rounded-xl p-6 hover-card"
                >
                  <h2 className="text-2xl font-bold text-sage-800 mb-4">{card.title}</h2>
                  <p className="text-sage-600 mb-6">{card.description}</p>
                  <Link
                    href={card.href}
                    className="inline-block px-6 py-2 bg-sage-100 text-sage-700 rounded-lg hover:bg-sage-200 transition-colors duration-200"
                  >
                    Læs mere
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Contact Form */}
        <section id="kontakt" className="py-20 bg-white/50">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto px-4 max-w-2xl"
          >
            <div className="glass-panel rounded-xl p-8">
              <h2 className="text-3xl font-bold text-sage-800 mb-6 text-center">Kontakt os</h2>
              <p className="text-sage-600 mb-8 text-center">Alle felter er obligatoriske *</p>
              
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {[
                  { name: 'navn', label: 'Navn', type: 'text' },
                  { name: 'email', label: 'Email', type: 'email' },
                  { name: 'telefon', label: 'Telefon', type: 'tel' },
                  { name: 'postnummer', label: 'Postnummer', type: 'text' }
                ].map((field) => (
                  <div key={field.name} className="form-group">
                    <label 
                      htmlFor={field.name}
                      className="block text-sage-700 font-medium mb-2"
                    >
                      {field.label} *
                    </label>
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      required
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-2 rounded-lg border ${
                        touched[field.name as keyof typeof touched] && 
                        errors[field.name] 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-sage-200 focus:border-sage-500'
                      } focus:outline-none transition-colors`}
                    />
                    {touched[field.name as keyof typeof touched] && 
                     errors[field.name] && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors[field.name]}
                      </p>
                    )}
                  </div>
                ))}
                <div className="form-group">
                  <label 
                    htmlFor="besked"
                    className="block text-sage-700 font-medium mb-2"
                  >
                    Besked *
                  </label>
                  <textarea
                    id="besked"
                    name="besked"
                    rows={5}
                    required
                    value={formData.besked}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      touched.besked && errors.besked 
                        ? 'border-red-500 focus:border-red-500' 
                        : 'border-sage-200 focus:border-sage-500'
                    } focus:outline-none transition-colors`}
                  ></textarea>
                  {touched.besked && errors.besked && (
                    <p className="mt-2 text-sm text-red-600">
                      {errors.besked}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-sage-600 text-white rounded-lg hover:bg-sage-700 transition-colors duration-200"
                >
                  Send besked
                </button>
              </form>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}