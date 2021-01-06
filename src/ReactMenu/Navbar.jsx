import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink exact activeClassName="active_class" to="/">
        About
      </NavLink>
      <NavLink exact activeClassName="active_class" to="/contact">
        Contact
      </NavLink>
    </div>
  );
}

export default Navbar;
