
import "../css/tailwind.css";
import Navbar from "../components/navbar";
import Head from "next/head";
import Footer from "../components/footer";
function MyApp({ Component, pageProps }) {
  return (
    <> <Head>
      <meta name="description" content="Discover a new world of opportunities with our study abroad programs in Georgia. Explore a rich culture, diverse landscape, and affordable tuition fees. Apply now and expand your horizons!" />
  <title>Study Abroad in Georgia - Your Ticket to a World of Possibilities</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/></>
         
  
  );
}

export default MyApp;
