import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../containers/Layout"
export default function App() {
  return (
    <Layout>
      {/* <Seo title="Home" /> */}
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/about">Go to about</Link> <br />
      </p>
    </Layout>
  )
}
