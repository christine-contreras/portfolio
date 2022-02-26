import * as React from "react"
import { Grid, Typography } from "@mui/material"
import { useSpring, animated, config } from "react-spring"
import useVisibilitySensor from "@rooks/use-visibility-sensor"
import AnimatedButton from "./AnimatedButton"
const Hero = () => {
  const heroNode = React.useRef(null)
  const { isVisible, visibilityRect } = useVisibilitySensor(heroNode, {
    intervalCheck: true,
    scrollCheck: true,
    resizeCheck: true,
  })

  const titleProps = useSpring({
    config: config.molasses,
    to: { opacity: isVisible ? 1 : 0, y: isVisible ? "0" : "-20%" },
    delay: 200,
  })

  const textProps = useSpring({
    config: config.molasses,
    to: { opacity: isVisible ? 1 : 0, y: isVisible ? "0" : "40%" },
    delay: 200,
  })
  return (
    <Grid container className="flex" sx={{ height: "100vh" }}>
      <Grid
        item
        container
        flexDirection="column"
        sx={{ p: 3 }}
        maxWidth="xl"
        ref={heroNode}
        className="m-auto"
      >
        <Grid item>
          <Typography
            variant="h1"
            className="text-shadow"
            component={animated.h1}
            style={titleProps}
            sx={{
              fontSize: { lg: "6em" },
            }}
          >
            Christine Contreras
          </Typography>
        </Grid>
        <Grid
          component={animated.div}
          style={textProps}
          item
          container
          alignSelf="flex-end"
          alignItems="center"
          justifyContent="center"
          xs={12}
          sm={11}
          lg={10}
          sx={{
            pt: 2,
            pb: 4,
            pl: 2,
            pr: 2,
            minHeight: "25vh",
            margin: "unset",
          }}
        >
          <Grid item container spacing={2}>
            <Grid item xs={12} md={6} lg={7}>
              <Typography variant="h5" component="h2" gutterBottom>
                Hi, there. I'm a full stack web developer based in Austin, TX.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={5}>
              <Typography>
                Voluptate qui commodo nulla minim aliqua. Pariatur nostrud
                fugiat magna veniam non. Voluptate dolore id laboris voluptate
                nulla labore dolor pariatur. Ullamco commodo velit et elit Lorem
                duis pariatur dolore ea dolore irure anim exercitation qui.
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item className="flex" component={animated.div} style={textProps}>
          <AnimatedButton />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Hero
