import Head from "next/head";
import Navbar from "../../components/navbar/Navbar";
import Imprint from "../../components/imprint/Imprint";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Leam - Imprint</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar />
      <Imprint />
      <Footer />
    </div>
  );
}
