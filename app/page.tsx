import ClientHome from "./clientHome";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fugemester Clausen | Professionel fugning',
  description:
    'Professionel fugning til konkurrencedygtige priser i Kolding, Horsens og Vejle',
  alternates: {
    canonical: 'https://fugemesterclausen.dk/',
  },
  openGraph: {
    url: 'https://fugemesterclausen.dk/',
    locale: 'da_DK',
    type: 'website',
  },
};

export default function Home() {
  return <ClientHome/>;
}