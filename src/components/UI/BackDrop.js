import classes from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onBackgroundClick} />;
};

export default BackDrop;
