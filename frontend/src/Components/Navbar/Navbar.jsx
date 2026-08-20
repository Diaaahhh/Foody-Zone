import React from "react";
import "../Navbar/Navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const buttons = ["All", "Breakfast", "Lunch", "Dinner"];
  return (
    <div className="containers">
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="logo" width={100} />
        </div>
        <div className="searchbar">
          <input placeholder="Search foods.." />
        </div>
      </div>
      <div className="filter">
        {buttons.map((butt, ind) => {
          return <button key={ind}>{butt}</button>;
        })}
      </div>
    </div>
  );
};

export default Navbar;
