import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { useSpring, animated, config } from "react-spring"
import useVisibilitySensor from "@rooks/use-visibility-sensor"
import { Grid, Typography, Paper, Container } from "@mui/material"

const ProjectPreview = ({ project }) => {
  const projectNode = React.useRef(null)
  const { isVisible, visibilityRect } = useVisibilitySensor(projectNode, {
    intervalCheck: true,
    scrollCheck: true,
    resizeCheck: true,
  })

  const ImageProps = useSpring({
    config: config.molasses,
    to: { opacity: isVisible ? 1 : 0.75, y: isVisible ? "0" : "2%" },
  })

  const image = project.preview.childrenImageSharp[0].gatsbyImageData

  return (
    <Grid
      item
      className="flex"
      sx={{
        zIndex: 2,
        maxWidth: 1000,
        margin: "auto",
        pt: 6,
        pb: 10,
      }}
    >
      <Link to={`projects/${project.slug}`} underline="none">
        <Paper
          sx={{ width: "100%", p: 4, overflow: "hidden" }}
          className="radius-sm"
        >
          <Grid container spacing={2} flexDirection="column" ref={projectNode}>
            <Grid
              item
              container
              spacing={1}
              flexDirection="column"
              alignItems="flex-end"
            >
              <Grid item>
                <Typography variant="subtitle1">{project.stack}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h4" component="h2">
                  {project.title}
                </Typography>
              </Grid>
            </Grid>
            <Grid item component={animated.div} style={ImageProps}>
              <GatsbyImage
                image={image}
                alt={project.title}
                className="radius-sm"
              />
              {/* <StaticImage
                src="../../images/project-previews/project-preview-freespirit.jpg"
                quality={95}
                placeholder="blurred"
                formats={["auto", "webp", "avif"]}
                alt="Free Spirit Designs Mockup"
                className="radius-sm"
              /> */}
            </Grid>
          </Grid>
        </Paper>
      </Link>
    </Grid>
  )
}

export default ProjectPreview
