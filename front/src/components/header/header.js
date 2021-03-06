import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css";
import Logo from "../../assets/social_media_icon/logo_1.png";
import { Button, FormControl, Form } from "react-bootstrap";

function Header(props){  
  return (
     <div className="header_div" id={(props.value=="first")?"header_div_id" : ""}>
        <div className="header_div_link">
          <a>
            <span>
              <NavLink to="/" className="header_navlink">
                Home
              </NavLink>
            </span>
          </a>
          <a>
            <span>
              <NavLink to="/gallery" className="header_navlink">
                Gallery
              </NavLink>
            </span>
          </a>
          <a>
            <span>
              <NavLink to="/about" className="header_navlink">
                About
              </NavLink>
            </span>
          </a>
          <a>
            <span>
              <NavLink to="/contact" className="header_navlink" >
                Contact us
              </NavLink>
            </span>
          </a>
        </div>
      </div>
    
  );
}
export default Header;
