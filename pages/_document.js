import { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
     <Head>
     <link rel="icon" href="/icon.png" />
     </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
