import { Fragment } from "react";
import mealsImage from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css'

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Meal Order App</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table full of food" />
            </div>
        </Fragment>
    );
};

export default Header;