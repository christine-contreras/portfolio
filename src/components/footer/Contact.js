import React from "react"
import { useSpring, animated, config } from "react-spring"
import useVisibilitySensor from "@rooks/use-visibility-sensor"
import { Grid, Typography } from "@mui/material"
import { Link } from "gatsby-theme-material-ui"
import FooterSocial from "../navigation/FooterSocial"
const Contact = () => {
  const footerNode = React.useRef(null)

  const { isVisible, visibilityRect } = useVisibilitySensor(footerNode, {
    intervalCheck: true,
    scrollCheck: true,
    resizeCheck: true,
  })

  const footerProps = useSpring({
    config: config.molasses,
    to: { opacity: isVisible ? 1 : 0, y: isVisible ? "0" : "20%" },
    // delay: 200,
  })

  console.log(isVisible)

  return (
    <Grid
      container
      flexDirection="column"
      spacing={3}
      alignItems="center"
      ref={footerNode}
    >
      <Grid item component={animated.div} style={footerProps}>
        <Typography
          variant="h1"
          className="text-shadow"
          textAlign="center"
          sx={{
            fontSize: { lg: "6em" },
          }}
        >
          stay in touch
        </Typography>
      </Grid>
      <Grid item component={animated.div} style={footerProps}>
        <Link
          href="mailto: christine.e.contreras@gmail.com?subject = Job Opportunity"
          underline="always"
          sx={{ fontSize: { sm: "1.5em", md: "2em" } }}
        >
          christine.e.contreras@gmail.com
        </Link>
      </Grid>
      <Grid item component={animated.div} style={footerProps}>
        <FooterSocial />
      </Grid>
    </Grid>
  )
}

export default Contact
