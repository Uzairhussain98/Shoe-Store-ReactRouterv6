
 import React from 'react'
 import './CartProduct.css'
import { useStateValue } from './StateProvider';
import { Button } from '@material-ui/core';


 
 function CartProduct({id , image , name}) {
    const[{}, dispatch] = useStateValue();




    const removeFromBasket = () => {


    dispatch
    ({
      type: 'REMOVE_FROM_BASKET',
         id:id,
        
      
  })


    }

   return (

     <div className="checkoutProduct" key="a">
       <img className="checkoutProduct__image" src={image} alt="" />

        <div className="checkoutProduct__info">

   <p className="checkoutProduct__title">{name}</p>

   <p className="checkoutProduct__price">
       <small>$</small>
       <strong>29.99</strong>
       </p>
       
                <Button onClick={removeFromBasket } size="medium" variant="contained" color="primary">
          Remove From Basket
        </Button>


        </div>


     </div>
   )
 }
 
 export default CartProduct