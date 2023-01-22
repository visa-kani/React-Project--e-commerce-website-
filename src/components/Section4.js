import React from 'react'
// import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/esm/Button'
import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/esm/Container'
import Item from './item'
import { useState } from 'react'
import Buttons from './filter-names'
import Data from './Data'



function Section4() {

  const [item, setItem] = useState(Data);
  const menuItems = [...new Set(Data.map((Val) => Val.category))];
  const [newArr, setNewArr] = useState(menuItems);

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    console.log(newItem);
    setItem(newItem);
  };

  return (
    <div >
      <Container className='auto0'>
      <div className="banner-txt1 showpets-txt1 txt-black">Pets <span className="banner-txt1 showpets-txt1 txt-orange">For sale</span></div>
      <Buttons filterItem={filterItem} setItem={setItem} newArr={newArr} />

      
            
              {/*  */}
            {/* <Item
                id={1}
                image={dog2}
                title='Purebred Yellow Long-haired Chihuahua Breed'
                price={`$25`}>
            </Item> */}
            
           
            {/*  */}

            {/* <Col className='equal-spacing'>
            <Item
                id={2}
                image={cat5}
                title='Purebred Yellow Long-haired Chihuahua Breed'
                price={35}>
            </Item>
            </Col> */}
            {/*  */}

            {/* <Col className='equal-spacing'>
            <Item
                id={3}
                image={cat3}
                title='Purebred Yellow Long-haired Chihuahua Breed'
                price={35}>
            </Item>
            </Col> */}

            {/*  */}
            {/* <Col className='equal-spacing'>
            <Item
                id={4}
                image={cat2}
                title='Purebred Yellow Long-haired Chihuahua Breed'
                price={35}>
            </Item>
            </Col> */}
            {/*  */}

            {/* <Col  >
            <Item
                id={5}
                image={cat4}
                title='Purebred Yellow Long-haired Chihuahua Breed'
                price={35}>
            </Item>
            </Col> */}
<Row xs={2} md={3} lg={5} className="g-4"> 
        {item?.slice(0, 9).map((item) => (
          <Item
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            text={item.text}
          />
        ))}
        
        </Row>
      </Container>

      <div className='centre-btn'>
        <Button className='btn btn-dark'>SHOP NOW</Button>
      </div>
    </div>



  )
}

export default Section4