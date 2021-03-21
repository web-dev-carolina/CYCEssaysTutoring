import React from 'react';
import ReactPayPal from './ReactPayPal';

export default function PayPalButton() {
  const [checkout, setCheckout] = React.useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {(checkout === true) 
          ? <div className="payment-div">
            <ReactPayPal />
          </div> 

          :<div>
            <h1>React-PayPal</h1>
            <button onClick={() => {setCheckout(true)}} className="checkout-button">Checkout</button>
          </div>
        }
      </header>
    </div>
  );
}