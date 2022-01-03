import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const cartItems = (
  <ul className={classes["cart-items"]}>
    {[{ id: "c1", name: "Sushi", price: 12.99 }].map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

const Cart = (props) => {
  return (
    <Modal onBackgroundCartHideClick={props.onHideCartClick}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.99</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onHideCartClick}
        >
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
