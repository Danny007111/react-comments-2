import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "70px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
  
};

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >

         Home 

      </NavLink>

      <NavLink
        to="/QuoteForm"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >

         Add-Comment

      </NavLink>

      <NavLink
        to="/QuoteListContainer"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >

         Comment-Section

      </NavLink>
    </div>
  );
}

export default NavBar;