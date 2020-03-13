import React from "react"
import Header from "../components/header"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <Header headerText="Hello Gatsby!" />
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
    <img src="https://source.unsplash.com/random/150x150" alt="" />
  </Layout>
)
