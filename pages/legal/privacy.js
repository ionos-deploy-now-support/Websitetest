import Head from "next/head";
import Navbar from "../../components/navbar/Navbar";
import Privacy from "../../components/privacy/Privacy";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Leam - Privacy Policy</title>
        <link rel="icon" href="/assets/favicon.ico" />
      </Head>
      <Navbar />
      <Privacy />
      <Footer />
    </div>
  );
}
