import React from "react"
import "../css/home.css"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { Typography, Grid, Box } from "@mui/material"
import Layout from "../containers/Layout"
import Hero from "../components/home/Hero"
const App = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Parallax pages={2}>
        <ParallaxLayer offset={0} speed={2.5}>
          <Hero />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
          className="flex"
          style={{ backgroundColor: "#dfafad" }}
        >
          <Typography
            variant="h1"
            className="text-shadow"
            sx={{
              fontSize: { lg: "6em" },
            }}
          >
            Projects
          </Typography>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={4} className="flex">
          <Box
            sx={{
              backgroundColor: "background.paper",
              width: 300,
              height: 500,
            }}
          />
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

export default App
