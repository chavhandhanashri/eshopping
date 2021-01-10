import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import { connect } from "react-redux";
import { loadCurrentItem,addToCart,} from "../../../redux/Shopping/shopping-action";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className={styles.product}>
       {/* Product image */}
      <img
        className={styles.product__image}
        src={ 'https://flymaxindia.stnshops.com'+ product.images[0]}
        alt="Product image"
      />
      {/* Product details */}
      <div className={styles.product__details}>
        <p className={styles.details__title}>{product.title}</p>
        
        <p className={styles.details__price}>Rs {product.price}</p>
        
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${product.id}`}>
        {/* view single item */}
          <button
            onClick={() => loadCurrentItem(product)}
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
          >
            View Product
          </button>
        </Link>
        {/* Add to cart call */}
        <button
          onClick={() => addToCart(product.id)}
          className={`${styles.buttons__btn} ${styles.buttons__add}`}>
             Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);