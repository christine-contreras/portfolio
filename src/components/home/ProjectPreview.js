import React from "react"
import { ParallaxLayer } from "@react-spring/parallax"
import { StaticImage } from "gatsby-plugin-image"
import { Grid, Typography, Paper, Container } from "@mui/material"

const ProjectPreview = ({ project }) => {
  return (
    <Grid
      item
      className="flex"
      sx={{ zIndex: 2, maxWidth: 1000, margin: "auto", pt: 6, pb: 6 }}
    >
      <Paper sx={{ width: "100%", p: 4 }} className="radius-sm">
        <Grid container spacing={2} flexDirection="column">
          <Grid
            item
            container
            spacing={1}
            flexDirection="column"
            alignItems="flex-end"
          >
            <Grid item>
              <Typography variant="subtitle1">
                React &amp; Ruby On Rails
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h4" component="h2">
                Free Spirit Designs
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <StaticImage
              src="../../images/project-previews/project-preview-freespirit.jpg"
              quality={95}
              placeholder="blurred"
              formats={["auto", "webp", "avif"]}
              alt="Free Spirit Designs Mockup"
              className="radius-sm"
            />
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default ProjectPreview
