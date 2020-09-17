import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/" activeStyle={{ fontWeight: "bold" }} exact={true}>
        Home
      </NavLink>
      {" - "}
      <NavLink to="/about" activeStyle={{ fontWeight: "bold" }}>
        About
      </NavLink>
      {" - "}
      <NavLink to="/discover" activeStyle={{ fontWeight: "bold" }}>
        Discover
      </NavLink>
    </div>
  );
}
