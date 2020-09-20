import React from 'react'
import CartProduct from './CartProduct'
import { useStateValue } from './StateProvider';
import './Cart.css'
import { Button } from '@material-ui/core';

const Cart = () => {
  const [{ basket}, dispatch] = useStateValue();

  return (
    <div className="cart">

      <h1 className="cart__title">Your Cart</h1>

      <div>

{basket.map(item => (
            <CartProduct 
              id={item.id}
              name={item.name}
              image={item.image}
            
            />

          ))}

</div>

<div className="payment__section">
  
  <h2>Subtotal : $20.99</h2>
  <Button  size="large" variant="contained" color="primary">
          Proceed
        </Button>





</div>

     
    </div>
  )
}

export default Cart
