import React from 'react';
import { Link } from "react-router-dom";
import '../css/Navbar.css'

const Navbar = () => {

   function myfun() {

      var e = document.getElementById("list");
      if (e.className === "right") {
         e.className += " responsive";
         console.log("gfd");
      }
      else {
         e.className = "right";
      }
   }

   return (
      <>
         < nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
               <a className="navbar-brand" href="/"><img src="image/logo-1.png" alt="Shop-N-Stop" /></a>

               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">About</a>
                     </li>
                     <li className="nav-item active">
                        <a className="nav-link" href="#">Product</a>
                     </li>
                     <li className="nav-item active">
                        <a className="nav-link" href="#">Order</a>
                     </li>
                     <li className="nav-item active">
                        <a className="nav-link" href="#">Contact</a>
                     </li>
                     <li className="nav-item active">
                        <a className="nav-link disabled"></a>
                     </li>
                  </ul>
                  <form className="d-flex">
                     <input className="form-control me-2" type="search" placeholder="Search for the Products" aria-label="Search" />
                     <button className="btn btn-outline-success" type="submit"><i className="fas fa-search"></i></button>
                  </form>
                  <i class="fa fa-bell"></i>
                  <i className="fa fa-heart"></i>
                  <i className="fa fa-cart-arrow-down"></i>
               </div>
            </div>


         </nav >
      </>
   )
}

export default Navbar;