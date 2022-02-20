import React from "react"
import { graphql } from "gatsby"
import Layout from "../../containers/Layout"
import Seo from "../../components/seo"
import { Grid } from "@mui/material"
const Projects = ({ data }) => {
  const projects = data.allMarkdownRemark.nodes
  return (
    <Layout>
      <Seo title="Projects" />
      <Grid container flexDirection="column" spacing={3} maxWidth="xl">
        <Grid item>
          <h1>Projects</h1>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Projects

//export page query
export const query = graphql`
  query ProjectsOverview {
    allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          stack
          title
        }
      }
    }
  }
`
