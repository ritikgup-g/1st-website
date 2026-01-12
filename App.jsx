import { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Hero />
      <Menu addToCart={() => setCartCount(cartCount + 1)} />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
