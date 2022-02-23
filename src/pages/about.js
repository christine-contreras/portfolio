import React from "react"
import { Link } from "gatsby-theme-material-ui"
import Layout from "../containers/Layout"
import Seo from "../components/seo"

export default function App() {
  return (
    <Layout>
      <Seo title="About Me" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
