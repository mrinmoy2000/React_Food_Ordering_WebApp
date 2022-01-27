import React, { useState, useEffect } from "react";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/store/CartProvider";

function App() {
  const [showCart, changeShowCart] = useState(false);

  const onShowCartHandler = () => {
    changeShowCart(true);
  };

  const onHideCartHandler = () => {
    changeShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onHideCartClick={onHideCartHandler} />}
      <Header onShowCartClick={onShowCartHandler} />
      <main>
        <MealsSummary />
        <AvailableMeals />
      </main>
    </CartProvider>
  );
}

export default App;
