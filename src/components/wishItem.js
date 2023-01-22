// import { incrementQuantity, decrementQuantity, removeItem} from "../Redux/CartSlice"
import { useDispatch } from 'react-redux'
import Table from 'react-bootstrap/Table';
// import {AiFillDelete} from 'react-icons/ai'
import {CiCircleRemove} from 'react-icons/ci'
import { removeWishItem } from "../Redux/CartSlice";

function WishItem({id, image, title, price, quantity=0}) {
  const dispatch = useDispatch()

  return (
    <div className="cartItem">
     
       <Table className="bordering">
      <thead>
        <tr>

          <th style={{width:'15%'}} ></th>

          <th style={{width:'20%'}} ></th>

          <th className='px-3 card-txt1' style={{width:'40%'}} >PRODUCT</th>

          <th style={{width:'25%'}}  className="card-txt1">PRICE</th>

         
        </tr>
      </thead>
      <tbody>
                 <tr>

                 <td><div style={{color:'red',marginTop:'10px',cursor:'pointer'}} className=' fs-4'
                  onClick={() => dispatch(removeWishItem(id))}><CiCircleRemove className="move-right" style={{color:"black" }}/>
                  </div>
                  </td>

                  <td >
                    <div><img src={image} alt='item'  style={{ width: '80px', height: '90px' }} /></div>
                  </td>
                  
                  <td>
                      <p className='mt-3'>{title}</p>
                  </td>

                  <td>
                    <div className='mt-3 card-txt2'><strong> {price}</strong></div>
                  </td>

                  <td >
                    <div className='mt-4 d-flex quantity-css'>
                   
                  </div>
                  </td>

                  </tr>
      </tbody>
    </Table> 

    </div>
  )
}

export default WishItem



