"use client";

import Head from "next/head";
import Link from "next/link";
import { FormEvent, useState } from "react";

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
          content="Fugemester Clausen tilbyder professionel fugearbejde. Få et uforpligtende tilbud i dag."
        />
      </Head>
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="overlay">
            <div className="hero-content">
              <h1>Velkommen til Fugemester Clausen</h1>
              <p>
                Få professionel fugning til konkurrencedygtige priser – vi beskytter dit hjem med moderne teknologi og præcision.
              </p>
              <Link href="/kontakt" className="btn btn-primary">
                Få et uforpligtende tilbud
              </Link>
            </div>
          </div>
        </section>

        {/* Tarjetas en línea para Om os, Vores ydelser y Billedgalleri */}
        <section className="cards-container section">
          <div className="container">
            <div className="cards-wrapper">
              {/* Tarjeta Om os */}
              <div className="card">
                <h2>Om os</h2>
                <p>
                  Vi leverer kvalitetsfugning til både nybyggeri og renovering. Vores styrker er præcision, pålidelighed og en jordnær tilgang – det er derfor, vores kunder vælger os.
                </p>
                <Link href="/hvem-er-vi" className="btn btn-secondary">
                  Læs mere
                </Link>
              </div>

              {/* Tarjeta Vores ydelser */}
              <div className="card">
                <h2>Vores ydelser</h2>
                <p>
                  Vi tilbyder et bredt udvalg af fugearbejde – fra vinduer og døre til badeværelser, industriløsninger og specialprojekter.
                </p>
                <Link href="/hvad-laver-vi" className="btn btn-secondary">
                  Læs mere
                </Link>
              </div>

              {/* Tarjeta Billedgalleri */}
              <div className="card">
                <h2>Billedgalleri</h2>
                <p>
                  Udforsk vores galleri og se eksempler på vores præcise og kvalitetsbevidste fugearbejde.
                </p>
                <Link href="/billedgalleri" className="btn btn-secondary">
                  Læs mere
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Contacto: Formulario */}
        <section className="contact-section section">
          <div className="container card">
            <h2>Kontakt os</h2>
            <p>Alle felter er obligatoriske *</p>
            <form onSubmit={handleSubmit} noValidate className="contact-form">
              <div className="form-group">
                <label htmlFor="navn">Navn *</label>
                <input
                  type="text"
                  id="navn"
                  name="navn"
                  required
                  value={formData.navn}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.navn && errors.navn ? "true" : "false"}
                  aria-describedby={touched.navn && errors.navn ? "navn-error" : undefined}
                  className={touched.navn && errors.navn ? "input-error" : ""}
                />
                {touched.navn && errors.navn && (
                  <p id="navn-error" className="error">
                    {errors.navn}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.email && errors.email ? "true" : "false"}
                  aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                  className={touched.email && errors.email ? "input-error" : ""}
                />
                {touched.email && errors.email && (
                  <p id="email-error" className="error">
                    {errors.email}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="telefon">Telefon *</label>
                <input
                  type="tel"
                  id="telefon"
                  name="telefon"
                  required
                  value={formData.telefon}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.telefon && errors.telefon ? "true" : "false"}
                  aria-describedby={touched.telefon && errors.telefon ? "telefon-error" : undefined}
                  className={touched.telefon && errors.telefon ? "input-error" : ""}
                />
                {touched.telefon && errors.telefon && (
                  <p id="telefon-error" className="error">
                    {errors.telefon}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="postnummer">Postnummer *</label>
                <input
                  type="text"
                  id="postnummer"
                  name="postnummer"
                  required
                  value={formData.postnummer}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.postnummer && errors.postnummer ? "true" : "false"}
                  aria-describedby={touched.postnummer && errors.postnummer ? "postnummer-error" : undefined}
                  className={touched.postnummer && errors.postnummer ? "input-error" : ""}
                />
                {touched.postnummer && errors.postnummer && (
                  <p id="postnummer-error" className="error">
                    {errors.postnummer}
                  </p>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="besked">Besked *</label>
                <textarea
                  id="besked"
                  name="besked"
                  rows={5}
                  required
                  value={formData.besked}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={touched.besked && errors.besked ? "true" : "false"}
                  aria-describedby={touched.besked && errors.besked ? "besked-error" : undefined}
                  className={touched.besked && errors.besked ? "input-error" : ""}
                ></textarea>
                {touched.besked && errors.besked && (
                  <p id="besked-error" className="error">
                    {errors.besked}
                  </p>
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Send besked
              </button>
            </form>
          </div>
        </section>
      </main>
      <style jsx>{`
        /* Global */
        main {
          font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
          color: #333;
          line-height: 1.6;
          background: #f7f7f7;
          padding-bottom: 2rem;
        }
        .container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1rem;
          text-align: center;
        }
        h1,
        h2,
        h3 {
          margin-bottom: 1rem;
        }
        p {
          margin-bottom: 1.5rem;
          font-size: 1rem;
        }
        /* Hero Section */
        .hero-section {
          position: relative;
          height: 100vh;
          background: url("/hero.jpg") no-repeat center center/cover;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-content {
          color: #fff;
          max-width: 600px;
          padding: 2rem;
        }
        .hero-content h1 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }
        /* Secciones */
        .section {
          padding: 4rem 0;
        }
        /* Tarjetas en línea */
        .cards-wrapper {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .card {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          text-align: center;
          flex: 1;
          min-width: 280px;
        }
        /* Formulario de contacto */
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
        }
        .form-group {
          display: flex;
          flex-direction: column;
        }
        .form-group label {
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .form-group input,
        .form-group textarea {
          padding: 0.75rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
          transition: border 0.3s ease;
        }
        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #0056b3;
        }
        .input-error {
          border: 1px solid red;
        }
        .error {
          color: red;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }
        .contact-form button {
          align-self: flex-start;
        }
        /* Botones */
        .btn {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          text-decoration: none;
          transition: background 0.3s ease;
          font-weight: 500;
          margin-top: 1rem;
          cursor: pointer;
          border: none;
        }
        .btn-primary {
          background: #0056b3;
          color: #fff;
        }
        .btn-primary:hover {
          background: #004494;
        }
        .btn-secondary {
          background: #e0e0e0;
          color: #333;
        }
        .btn-secondary:hover {
          background: #c0c0c0;
        }
        /* Responsive */
        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }
          .hero-content p {
            font-size: 1rem;
          }
          .cards-wrapper {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}