import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import background from "../images/background.png"
import gif from "../images/3609101.svg"

import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div
      className="home"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="container">
        <div>
          <h3>Let's Control</h3>
          <h1>You are at home?</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever.
          </p>
          <button>Read More</button>
        </div>
        <img src={gif} alt="Stay At Home" />
      </div>
    </div>
  </Layout>
)

export default IndexPage
