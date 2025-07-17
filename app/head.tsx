export default function Head() {
  const title       = "Fugemester Clausen";
  const description = "Professionel fugning til konkurrencedygtige priser i Kolding, Horsens og Vejle";
  const url         = "https://fugemesterclausen.dk";

  return (
    <>
      <title>{title}</title>
      <link rel="icon" type="image/png" sizes="32x32" href="/public/images/FMC1_1-1.png" />
      <meta name="description" content={description} />
      <meta name="keywords" content="fugemester, fugning, tætning af fuger, fuge­montering, badeværelse, køkken, Fugemester Clausen, Kolding, Horsens, Vejle, fugning Danmark, professionel fugearbejde" />      <link rel="canonical"     href={url} />

      {/* Open Graph */}
      <meta property="og:title"       content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={url} />
      <meta property="og:locale"      content="da_DK" />
      <meta property="og:type"        content="website" />
      
      {/* Twitter Card (opcional) */}
      <meta name="twitter:card"       content="summary_large_image" />
    </>
  );
}