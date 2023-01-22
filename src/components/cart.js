import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './cartItem'
import Section1 from './Section1'
import Total from "./total"
import {RiArrowRightSLine }from 'react-icons/ri'

function Cart() {
const cart = useSelector((state) => state.cart)
  return (
    <div>
<div className="cart__left">
  <div>
    <Section1/>
    <div className='cart-banner'>
      <p className='cart-head'>Cart</p>
      <p className='card-txt1 center-txt'>home <RiArrowRightSLine/><span>cart</span></p>
    </div>
    <Total/>
    {cart?.map((item) => (
      <CartItem
      
        key={item.id}
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price} 
        quantity={item.quantity}
      />
    ))}
  </div>
</div>
    <div>
       
        
    </div>
    </div>
  )
}

export default Cart