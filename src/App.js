import React, { Fragment } from 'react'
import Header from "./components/Layout/Header";
import AvailableMeals from './components/Meals/AvailableMeals';
import MealsSummary from './components/Meals/MealsSummary';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart />
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}

export default App;
