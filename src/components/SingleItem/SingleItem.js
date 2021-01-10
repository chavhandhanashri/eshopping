import React from "react";

import styles from "./SingleItem.module.css"
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-action";

const SingleItem = ({ current, addToCart }) => {
  return (
    <div className={styles.singleItem}>
      {/* Product image */}
      <img
        className={styles.singleItem__image}
        src={'https://flymaxindia.stnshops.com'+ current.images[0]}
        alt="Product image"
      />
       {/* title and price */}
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{current.title}</p>
        <p className={styles.details__price}>Rs {current.price}</p>
        
        {/* add to cart call */}
        <button
          onClick={() => addToCart(current.id)}
          className={styles.details__addBtn}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);