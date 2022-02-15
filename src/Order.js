import React from 'react';
import {Link} from 'react-router-dom';
import './Order.css';

const Order = ({ item, ordered, message, orderAnother }) => {
  const eatOne = () => {
    orderAnother();
  };

  return(
    <div className="Order">
      <h3>{item}</h3>
      <button onClick={eatOne}>{message}</button>
      <h4>Well, dang. You've eaten {ordered} {item}s</h4>
      <br />
      <Link className="home" to="/">Enough. Take me back to the machine.</Link>
    </div>
  )
}

export default Order;
