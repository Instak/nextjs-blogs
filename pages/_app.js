import "../styles/globals.css";
import Navbar from "../componet/Navbar";
import Footer from "../componet/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
