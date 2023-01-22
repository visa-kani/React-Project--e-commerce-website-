import React from "react";
import Datas from "./datashop";

const FilterNames = ({ filterItem, setItem, newArr }) => {
  return (
    <>
      <div className="d-flex justify-content-left">
        <div className="justify-content-right pb-4 m-3" variant="pills" defaultActiveKey="link">
          <div >
            <div className='shopPage-txt2' eventKey="link" onClick={() => setItem(Datas)}>All Products</div>
          </div>
          <div>
            <div className='shopPage-txt2' eventKey="link-1" onClick={() => filterItem("dog")}
            >Dogs</div>
          </div>
          <div>
            <div className='shopPage-txt2' eventKey="link-2" onClick={() => filterItem("cat")}
            >Cats</div>
          </div>
          <div>
            <div className='shopPage-txt2' eventKey="link-3" onClick={() => filterItem("petfood")}
            >Pet's Foods</div>
          </div>
          <div>
            <div className='shopPage-txt2' eventKey="link-4" onClick={() => filterItem("products")}
            > Medicine</div>
          </div>
          <div>
            <div className='shopPage-txt2' eventKey="link-4" onClick={() => filterItem("products")}
            > Dining Subtances</div>
          </div>
          <div>
            <div className='shopPage-txt2' eventKey="link-4" onClick={() => filterItem("products")}
            > Toys </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterNames;