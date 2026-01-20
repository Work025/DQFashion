import { useState } from "react";
import Header from "./Components/Header/Header"
import Section from "./Pages/Section/Section";
import Main from "./Pages/Main/Main";
import Hero from "./Pages/Hero/Hero"
import Sale from "./Pages/Sale/Sale"
import Footer from "./Components/Footer/Footer"
import './App.css';

function App() {

  const [cartItems, setCartItems] = useState([]); // cartdagi itemlar

  const handleAddToCart = (item) => {
    // itemni cartga qo'shish
    setCartItems(prev => [...prev, item]);
  };

  return (
    <div className="container">
      <Header cartItems={cartItems} />
      <Section />
      <Main />
      <Hero />
      <Sale onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
}

export default App;
