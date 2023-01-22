import React from 'react'
import { useSelector } from 'react-redux'
import WishItem from './wishItem'
import Section1 from './Section1'
import {RiArrowRightSLine }from 'react-icons/ri'

function Wish() {
const wish = useSelector((state) => state.wish)
  return (
    <div>
<div className="cart__left">
  <div>
    <Section1/>
    <div className='cart-banner'>
      <p className='cart-head'>Wishlist</p>
      <p className='card-txt1 center-txt'>home <RiArrowRightSLine/><span>Wish</span></p>
    </div>
    {wish?.map((item) => (
      <WishItem
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
    </div>
  )
}

export default Wish