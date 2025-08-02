import ClientHvemErVi from "./clientHvemErVi";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hvem er vi | Fugemester Clausen',
  description:
    'Mød teamet bag Fugemester Clausen og se, hvorfor faglighed og præcision er vores varemærke.',
  alternates: {
    canonical: 'https://fugemesterclausen.dk/hvem-er-vi',
  },
};
export default function HvemErVi() {
  return <ClientHvemErVi/>;
}