import { incrementQuantity, decrementQuantity, removeItem} from "../Redux/CartSlice"
import { useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table';
// import {AiFillDelete} from 'react-icons/ai'
import {CiCircleRemove} from 'react-icons/ci'
import { FiPlus } from 'react-icons/fi';
import { BiMinus } from 'react-icons/bi';

function CartItem({id, image, title, price, quantity=0}) {
  const dispatch = useDispatch()

  return (
    <div className="cartItem">
      {/* <img className="cartItem__image" src={image} alt='item'/>
      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='cartItem__incrDec'>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
       */}
       <Table className="bordering">
      <thead>
        <tr>

          <th style={{width:'15%'}} ></th>

          <th style={{width:'20%'}} ></th>

          <th className='px-3 card-txt1' style={{width:'30%'}} >PRODUCT</th>

          <th style={{width:'15/%'}}  className="card-txt1">PRICE</th>

          <th style={{width:'20%'}} className='card-txt1 px-5'>QUANTITY</th>

        </tr>
      </thead>
      <tbody>
                 <tr>

                 <td><div style={{color:'red',marginTop:'10px',cursor:'pointer'}} className=' fs-4'
                  onClick={() => dispatch(removeItem(id))}><CiCircleRemove className="move-right" style={{color:"black" }}/>
                  </div>
                  </td>

                  <td >
                    <div><img src={image} alt='item'  style={{ width: '80px', height: '90px' }} /></div>
                  </td>
                  
                  <td>
                      <p className='mt-3'>{title}</p>
                  </td>

                  <td>
                    <div className='mt-3 card-txt2'>  <strong> {price}</strong></div>
                  </td>

                  <td >
                    <div className='mt-4 d-flex quantity-css'>
                    <p className="bord" onClick={() => dispatch(decrementQuantity(id))} >
                    <BiMinus style={{ width: '10px', height: '10px' }} /></p>
                    <p className="borde"> {quantity} </p>
                    <p className="borders" onClick={() => dispatch(incrementQuantity(id))}
                    ><FiPlus style={{ width: '10px', height: '10px' }}/></p>
                  </div>
                  </td>

                  

                  </tr>
      </tbody>
    </Table> 

    </div>
  )
}

export default CartItem



