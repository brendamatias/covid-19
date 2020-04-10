import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

import logo from "../images/logo.svg"

const Header = () => (
  <header>
    <nav>
      <div>
        <Link to="/">
          <img src={logo} alt="Covid-19" />
        </Link>
      </div>

      <ul>
        <li>
          <a href="#">Overview</a>
        </li>
        <li>
          <a href="#">Contagion</a>
        </li>
        <li>
          <a href="#">Preventions</a>
        </li>
        <li>
          <a href="#">Symptoms</a>
        </li>
        <li>
          <button>Contact Us</button>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
