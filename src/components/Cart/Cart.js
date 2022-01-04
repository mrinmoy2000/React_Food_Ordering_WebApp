import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartTotalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const cartitemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartitemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onBackgroundCartHideClick={props.onHideCartClick}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartTotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button
          className={classes["button--alt"]}
          onClick={props.onHideCartClick}
        >
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
