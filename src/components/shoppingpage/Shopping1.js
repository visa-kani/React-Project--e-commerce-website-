import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import {RiArrowRightSLine} from 'react-icons/ri'
import Item from '../item'
import Section1 from '../Section1'
import { useState } from 'react'    
import Datas from './datashop'
import FilterNames from './filterbut'

function Shopping1() {

    const [item, setItem] = useState(Datas);
  const menuItems = [...new Set(Datas.map((Val) => Val.category))];
  const [newArr, setNewArr] = useState(menuItems);

  const filterItem = (curcat) => {
    const newItem = Datas.filter((newVal) => {
      return newVal.category === curcat;
    });
    console.log(newItem);
    setItem(newItem);
  };

  return (
    <div> 
        <Section1/>

        <div className='cart-banner'>
            <p className='cart-head'>SHOP</p>
            <p className='card-txt1 center-txt'>home <RiArrowRightSLine/><span>cart</span></p>
        </div>
        <Container  className='topspace'>
       
            <Row>
                <Col lg={3} md={10} className='shopPage-layout equal-spacing'>
                    <div>
                        <p className='shopPage-txt1'>Categories</p>
                        <div className='border-line-shop'></div>
                        <FilterNames filterItem={filterItem} setItem={setItem} newArr={newArr} />
                    </div>
                </Col>
                <Col lg={9} className='blu showpets text-center'>
                        {/* <CardGroup>
                            <Col className='equal-spacing'>
                            <Item
                                id={1}
                                image={dog2}
                                title='Purebred Yellow Long-haired Chihuahua Breed'
                                price={`$25`}>
                            </Item>
                            </Col>
                            <Col className='equal-spacing'>
                            <Item
                                id={1}
                                image={cat2}
                                title='Purebred Yellow Long-haired Chihuahua Breed'
                                price={`$25`}>
                            </Item>
                            </Col>
                            <Col className='equal-spacing'>
                            <Item
                                id={1}
                                image={cat3}
                                title='Purebred Yellow Long-haired Chihuahua Breed'
                                price={`$25`}>
                            </Item>
                            </Col>
                            <Col className='equal-spacing'>
                            <Item
                                id={1}
                                image={cat5}
                                title='Purebred Yellow Long-haired Chihuahua Breed'
                                price={`$25`}>
                            </Item>
                            </Col>
                        </CardGroup>
                    </Row>
                    <Row className="align-items-center">
                        <CardGroup>
                            <Col className='equal-spacing'>
                            <Item
                                id={1}
                                image={dog2}
                                title='Purebred Yellow Long-haired Chihuahua Breed'
                                price={`$25`}>
                            </Item>
                            </Col>
                            <Col className='equal-spacing'>
                            <Item
                                id={1}
                                image={cat2}
                                title='Purebred Yellow Long-haired Chihuahua Breed'
                                price={`$25`}>
                            </Item>
                            </Col>
                            <Col className='equal-spacing'>
                            <Item
                                id={1}
                                image={cat3}
                                title='Purebred Yellow Long-haired Chihuahua Breed'
                                price={`$25`}>
                            </Item>
                            </Col>
                            <Col className='equal-spacing'>
                            <Item
                                id={1}
                                image={cat5}
                                title='Purebred Yellow Long-haired Chihuahua Breed'
                                price={`$25`}>
                            </Item>
                            </Col>
                        </CardGroup>
                    </Row>
                    <Row className="align-items-center">
                        <CardGroup>
                            <Col className='equal-spacing'>
                            <Item
                                id={1}
                                image={dog2}
                                title='Purebred Yellow Long-haired Chihuahua Breed'
                                price={`$25`}>
                            </Item>
                            </Col>
                            <Col className='equal-spacing'>
                            <Item
                                id={1}
                                image={cat2}
                                title='Purebred Yellow Long-haired Chihuahua Breed'
                                price={`$25`}>
                            </Item>
                            </Col>
                            <Col className='equal-spacing'>
                            <Item
                                id={1}
                                image={cat3}
                                title='Purebred Yellow Long-haired Chihuahua Breed'
                                price={`$25`}>
                            </Item>
                            </Col>
                            <Col className='equal-spacing'>
                            <Item
                                id={1}
                                image={cat5}
                                title='Purebred Yellow Long-haired Chihuahua Breed'
                                price={`$25`}>
                            </Item>
                            </Col>
                        </CardGroup>
                    </Row>
                    <Row className="align-items-center">
                        <CardGroup>
                            <Col className='equal-spacing'>
                            <Item
                                id={1}
                                image={dog2}
                                title='Purebred Yellow Long-haired Chihuahua Breed'
                                price={`$25`}>
                            </Item>
                            </Col>
                            <Col className='equal-spacing'>
                            <Item
                                id={1}
                                image={cat2}
                                title='Purebred Yellow Long-haired Chihuahua Breed'
                                price={`$25`}>
                            </Item>
                            </Col>
                            <Col className='equal-spacing'>
                            <Item
                                id={1}
                                image={cat3}
                                title='Purebred Yellow Long-haired Chihuahua Breed'
                                price={`$25`}>
                            </Item>
                            </Col>
                            <Col className='equal-spacing'>
                            <Item
                                id={1}
                                image={cat5}
                                title='Purebred Yellow Long-haired Chihuahua Breed'
                                price={`$25`}>
                            </Item>
                            </Col>
                        </CardGroup> */}

<Row xs={2} md={3} lg={4} className="g-4"> 
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
                    
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Shopping1