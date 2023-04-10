import React, { useState } from "react";
import NavLink from "./navLink";

const Navbar = (props) => {
  return (
    <div>
      <ul className="nav nav-pills flex-column mb-auto">
        {props.menuItems.map((item) => (
          <NavLink key={item.id} {...item} onItemClick={props.onItemClick} />
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
