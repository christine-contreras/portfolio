import React from "react"
import { useSpring, animated, config } from "react-spring"
import useVisibilitySensor from "@rooks/use-visibility-sensor"
import { Grid, Typography } from "@mui/material"
import Contact from "../components/footer/Contact"
const Footer = () => {
  const footerNode = React.useRef(null)
  const { isVisible, visibilityRect } = useVisibilitySensor(footerNode, {
    intervalCheck: true,
    scrollCheck: true,
    resizeCheck: true,
  })

  return (
    <footer>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        sx={{ height: "100vh" }}
      >
        <Grid item ref={footerNode}>
          <Contact isVisible={isVisible} />
        </Grid>
        {/* <Grid item>
          <Typography>
            Copyright &copy; Christine Contreras {new Date().getFullYear()}
          </Typography>
        </Grid> */}
      </Grid>
    </footer>
  )
}

export default Footer
