import React from "react"
import Header from "../components/header"
import Navigation from "../components/navigation"

export default () => (
  <div style={{ color: `teal` }}>
    <Navigation />
    <Header headerText="Contact" />
    <p>Send us a message!</p>
  </div>
)
