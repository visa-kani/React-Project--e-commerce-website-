// src/components/Total.js
import {useSelector} from 'react-redux'
import React from 'react'
import Table from 'react-bootstrap/esm/Table'

function Total() {
const cart = useSelector((state) => state.cart)

const getTotal = () => {
  let totalQuantity = 0
  let totalPrice = 0
  cart.forEach(item => {
    totalQuantity += item.quantity
    totalPrice += item.price * item.quantity
  })
  return {totalPrice, totalQuantity}
}
  return (
    <div>
      <Table className='total'>
        <th className='card-txt2'>CART TOTAL</th>
        <tr>
          <td className='card-txt1'>
          <p className="total__p">
                 Total ({getTotal().totalQuantity} Items) 
                : <strong>{getTotal().totalPrice}</strong>
          </p>
          </td>
        </tr>

      </Table>
          
    </div>
  )
}

export default Total