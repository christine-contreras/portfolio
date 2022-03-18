import React from "react"
import Layout from "../containers/Layout"
import Seo from "../components/seo"
import { Grid, Typography, Paper, Container } from "@mui/material"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import { graphql } from "gatsby"
const projectDetails = ({ data }) => {
  const { html } = data.markdownRemark
  const { title, stack, feature } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <Seo title="Project | " />
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ p: 4 }}
      >
        <Grid
          item
          container
          spacing={2}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h1" className="text-shadow" paddingBottom>
              {title}
            </Typography>
            <Typography variant="h4" component="p">
              {stack}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <GatsbyImage
              image={getImage(feature)}
              alt={title}
              className="radius-sm"
            />
          </Grid>
        </Grid>
      </Grid>

      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
    </Layout>
  )
}

export default projectDetails

export const query = graphql`
  query ProjectPage($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        stack
        title
        feature {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              quality: 95
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`
