import React from "react"
import { useSpring, animated, config } from "react-spring"

import { Grid, Typography } from "@mui/material"
import { Link } from "gatsby-theme-material-ui"
import FooterSocial from "../navigation/FooterSocial"
const Contact = ({ isVisible }) => {
  const footerProps = useSpring({
    config: config.molasses,
    to: { opacity: isVisible ? 1 : 0, y: isVisible ? "0" : "20%" },
    delay: 200,
  })

  return (
    <Grid
      container
      flexDirection="column"
      spacing={3}
      alignItems="center"
      component={animated.div}
      style={footerProps}
    >
      <Grid item>
        <Typography
          variant="h1"
          className="text-shadow"
          sx={{
            fontSize: { lg: "6em" },
          }}
        >
          stay in touch
        </Typography>
      </Grid>
      <Grid item>
        <Link
          href="mailto: christine.e.contreras@gmail.com?subject = Job Opportunity"
          underline="always"
          sx={{ fontSize: "2em" }}
        >
          christine.e.contreras@gmail.com
        </Link>
      </Grid>
      <Grid item>
        <FooterSocial />
      </Grid>
    </Grid>
  )
}

export default Contact
