import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { Container, Box, Typography } from "@mui/material"
import Layout from "../containers/layout"
import Seo from "../components/seo"

export default function App() {
  return (
    <Layout>
      <Seo title="Page two" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}
