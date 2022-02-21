import React from "react"
import "../css/home.css"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../containers/Layout"
import Hero from "../components/home/Hero"
export default function App() {
  return (
    <Layout>
      {/* <Seo title="Home" /> */}
      <Hero />
      {/* <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      /> */}
    </Layout>
  )
}
