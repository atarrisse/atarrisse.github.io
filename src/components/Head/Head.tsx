import { default as NextHead } from "next/head";

const Head = () => (
  <NextHead>
    <title>Ana Tarrisse</title>

    <meta name="description" content="Ana Tarrisse's website" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <link rel="icon" href="/favicon.ico" />

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;700;800&display=swap"
    />
  </NextHead>
);


export default Head;
