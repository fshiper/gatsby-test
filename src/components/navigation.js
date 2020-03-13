import React from "react"
import { Link } from "gatsby"
import styles from "./navigation.module.css"

export default () => (
  <>
    <Link to="/">Home</Link>
    <Link to="/contact/">Contact</Link>

    <Link to="/about/">About</Link>

    <Link to="/about-css-modules/">About CSS modules</Link>
  </>
)
