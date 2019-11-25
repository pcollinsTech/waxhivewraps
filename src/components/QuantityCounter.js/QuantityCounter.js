import React, { Fragment } from "react";
import "./style.scss";

const QuantityCounter = ({ quantity, addToQuantity }) => {
  const minus = () => addToQuantity(quantity - 1);
  const plus = () => addToQuantity(quantity + 1);
  return (
    <Fragment>
      <div className="quantity_counter">
        <input type="text" value={quantity} />
        <div className="counters">
          <button className="btn btn-primary btn-sm" onClick={e => plus()}>
            <i className="icon fa-plus"></i>
          </button>
          <button className="btn btn-primary btn-sm" onClick={e => minus()}>
            <i className="icon fa-minus"></i>
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default QuantityCounter;
