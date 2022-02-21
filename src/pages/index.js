import React from "react"
import "../css/home.css"
import { StaticImage } from "gatsby-plugin-image"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"

import Layout from "../containers/Layout"
import Hero from "../components/home/Hero"
export default function App() {
  return (
    <Layout>
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={2.5}>
          <Hero />
        </ParallaxLayer>
      </Parallax>

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
