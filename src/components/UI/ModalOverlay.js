import classes from "./Modal.module.css";

const ModalOverlay = (props) => {
  return <div className={classes.modal}>
      {props.children}
    </div>;
};

export default ModalOverlay;
