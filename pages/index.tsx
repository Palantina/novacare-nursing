import Head from "next/head";
import NovaCareWebsite from "../components/NovaCareWebsite";

export default function Home() {
  return (
    <>
      <Head>
        <title>NovaCare Nursing</title>
        <meta name="description" content="Premium Nursing, Heartfelt Care in Hobart and surrounds, Tasmania" />
      </Head>
      <NovaCareWebsite />
    </>
  );
}
