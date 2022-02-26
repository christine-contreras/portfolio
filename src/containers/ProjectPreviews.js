import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Grid, Typography } from "@mui/material"
import { useSpring, animated, config } from "react-spring"
import useVisibilitySensor from "@rooks/use-visibility-sensor"
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

  const projectTitleNode = React.useRef(null)
  const { isVisible, visibilityRect } = useVisibilitySensor(projectTitleNode, {
    intervalCheck: true,
    scrollCheck: true,
    resizeCheck: true,
  })
  console.log(isVisible)
  const titleProps = useSpring({
    config: config.molasses,
    to: { opacity: isVisible ? 1 : 0, y: isVisible ? "0" : "-20%" },
  })

  return (
    <>
      <Grid
        container
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ position: "relative", backgroundColor: "#dfafad", pt: 10 }}
      >
        <Grid
          item
          sx={{ position: "sticky", top: "20%", pt: 6 }}
          ref={projectTitleNode}
        >
          <Typography
            variant="h1"
            className="text-shadow"
            component={animated.h2}
            style={titleProps}
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
