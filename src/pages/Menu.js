import React from "react";
import menupic from "../images/menupic.jpg";

const Menu = () => {
  return (
    <>
      <div className="menu_pic">
        <img src={menupic}></img>
        <h1 className="menu_heading">MENU</h1>
      </div>
      <div className="menu_container">
      <h2 style={{textAlign: "center", color: "orange", fontWeight: "900"}}>MR.SIDHU'S CAFE</h2>
      <div className="card" style={{ width: "18rem", boxShadow: "0px 0px 19px 2px black" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH-ZIobq8RxBro_CYrwSP90Ym7NGwcOOmHTg&s" className="card-img-top" style={{height: "30vh"}} alt="something went wrong" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title 
          </p>
          <p className="card-text" style={{color: "red"}}>
           Rs. 340
          </p>
          <a href="#" className="btn btn-primary" >
            Add to Cart
          </a>
        </div>
      </div>
      </div>
    </>
  );
};

export default Menu;
