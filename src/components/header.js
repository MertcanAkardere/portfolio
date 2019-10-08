import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../styles/header.scss"

//import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

const Header = ({ siteTitle, menuLinks }) => (
  <div class="header">
    <div class="inner_header">
      <div class="logo_container">
        <h1>Mertcan <span>Akardere</span></h1>
      </div>


      <div class="navigation">
        <nav>
          <ul class="nav_flex">
            {menuLinks.map(link => (
              <li>
                <Link to={link.link}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>



      </div>

    </div>
  </div>

  /*
  <ul class="navigation">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li>
  </ul>

  <li
    key={link.name}
    style={{
      listStyleType: `none`,
      padding: `1rem`,
    }}
  >
  */
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
