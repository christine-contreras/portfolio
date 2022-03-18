import React from "react"
import "../css/home.css"
import Seo from "../components/seo"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Layout from "../containers/Layout"
import Hero from "../components/home/Hero"
import ProjectPreviews from "../containers/ProjectPreviews"
const App = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Hero />
      <ProjectPreviews />
    </Layout>
  )
}

export default App
