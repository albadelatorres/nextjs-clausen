"use client";

import Link from "next/link";

export default function Privatlivspolitik() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-sage-800 mb-6 text-center">
        Privatlivspolitik
      </h1>
      <p className="text-sage-700 mb-4">
        Din privatliv er vigtig for os. Hos Fugemester Clausen respekterer vi dit privatliv og er forpligtet til at beskytte dine personoplysninger.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-sage-800 mb-3">
          1. Indsamling af persondata
        </h2>
        <p className="text-sage-700">
          Vi indsamler kun persondata, som du selv giver os gennem vores
          kontaktformular. Disse oplysninger omfatter:
        </p>
        <ul className="list-disc ml-6 mt-2 text-sage-700">
          <li>Navn</li>
          <li>Email</li>
          <li>Telefonnummer</li>
          <li>Postnummer</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-sage-800 mb-3">
          2. Formål med indsamlingen
        </h2>
        <p className="text-sage-700">
          Vi bruger dine oplysninger udelukkende til at:
        </p>
        <ul className="list-disc ml-6 mt-2 text-sage-700">
          <li>Besvare din forespørgsel</li>
          <li>Tilbyde dig et uforpligtende tilbud</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-sage-800 mb-3">
          3. Cookies
        </h2>
        <p className="text-sage-700">
          Vi bruger ikke cookies eller sporingsteknologier på denne hjemmeside.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-sage-800 mb-3">
          4. Dine rettigheder
        </h2>
        <p className="text-sage-700">
          Du har ret til at få indsigt i, rette eller slette dine oplysninger. Kontakt os via vores{" "}
          <Link href="/#kontakt" className="text-sage-600 underline">
            kontaktformular
          </Link>{" "}
          for at anmode om dette.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-sage-800 mb-3">
          5. Kontaktinformation
        </h2>
        <p className="text-sage-700">
          Fugemester Clausen <br />
          Daniel Segato Clausen <br />
          Elkærholmparken 6B <br />
          6040 Egtved, Denmark <br />
        </p>
      </section>

      <p className="text-sage-600 text-sm mt-6">
        Sidst opdateret: {new Date().toLocaleDateString("da-DK")}
      </p>
    </main>
  );
}