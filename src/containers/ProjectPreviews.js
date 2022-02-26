import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, Typography, Paper, Container } from "@mui/material"
import ProjectPreview from "../components/home/ProjectPreview"
const ProjectPreviews = () => {
  const data = useStaticQuery(graphql`
    query ProjectPreviews {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          frontmatter {
            slug
            stack
            title
            date
            preview {
              childrenImageSharp {
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
    }
  `)

  const projects = data.allMarkdownRemark.nodes

  console.log(projects)
  return (
    <>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ position: "relative", backgroundColor: "#dfafad", pt: 10 }}
      >
        <Grid item sx={{ position: "sticky", top: "20%", pt: 6 }}>
          <Typography
            variant="h1"
            className="text-shadow"
            sx={{
              fontSize: { lg: "6em" },
            }}
          >
            Projects
          </Typography>
        </Grid>
        <Grid item container>
          {projects?.map(project => {
            return (
              <ProjectPreview
                project={project?.frontmatter}
                key={`project-preview-${project?.frontmatter?.title}`}
              />
            )
          })}
        </Grid>
      </Grid>
    </>
  )
}

export default ProjectPreviews
