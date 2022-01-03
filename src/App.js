import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import Cart from "./components/Cart/Cart";

function App() {
  const [showCart, changeShowCart] = useState(false);

  const onShowCartHandler = () => {
    changeShowCart(true);
  };

  const onHideCartHandler = () => {
    changeShowCart(false);
  };

  return (
    <Fragment>
      {showCart && <Cart onHideCartClick={onHideCartHandler} />}
      <Header onShowCartClick={onShowCartHandler} />
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}

export default App;
