import * as React from "react"
import { Grid, Paper, Typography } from "@mui/material"
import { useSpring, animated, config } from "react-spring"
import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import useVisibilitySensor from "@rooks/use-visibility-sensor"
const Hero = () => {
  const heroNode = React.useRef(null)
  const { isVisible, visibilityRect } = useVisibilitySensor(heroNode, {
    intervalCheck: true,
    scrollCheck: true,
    resizeCheck: true,
  })

  const titleProps = useSpring({
    config: config.molasses,
    to: { opacity: isVisible ? 1 : 0, y: isVisible ? "40%" : "0" },
    delay: 200,
  })

  const textProps = useSpring({
    config: config.molasses,
    to: { opacity: isVisible ? 1 : 0, y: isVisible ? "0" : "40%" },
    delay: 200,
  })
  return (
    <Parallax pages={2}>
      <ParallaxLayer offset={0} speed={2.5}>
        <Grid
          container
          flexDirection="column"
          sx={{ p: 3 }}
          maxWidth="xl"
          ref={heroNode}
        >
          <Grid item>
            <Typography variant="h1" component={animated.h1} style={titleProps}>
              Christine Contreras
            </Typography>
          </Grid>
          <Grid
            component={animated.div}
            style={textProps}
            item
            container
            alignSelf="flex-end"
            xs={11}
            sm={10}
            sx={{
              backgroundColor: "background.paper",
              pt: 6,
              pb: 4,
              pl: 2,
              pr: 2,
              mixBlendMode: "difference",
            }}
          >
            <Grid item container spacing={3}>
              <Grid item xs={12} sm={6} md={7}>
                <Typography
                  variant="h5"
                  component="h2"
                  color="secondary"
                  gutterBottom
                >
                  Hi, there. I'm a full stack web developer based in Austin, TX.
                </Typography>
                {/* <Button
                  to="/about"
                  variant="contained"
                  color="secondary"
                  className="btn"
                >
                  More About Me
                </Button> */}
              </Grid>
              <Grid item xs={12} sm={6} md={5}>
                <Typography color="secondary">
                  Voluptate qui commodo nulla minim aliqua. Pariatur nostrud
                  fugiat magna veniam non. Voluptate dolore id laboris voluptate
                  nulla labore dolor pariatur. Ullamco commodo velit et elit
                  Lorem duis pariatur dolore ea dolore irure anim exercitation
                  qui.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={2}
        style={{ backgroundColor: "#ff6d6d" }}
      />

      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <p>Scroll up</p>
      </ParallaxLayer>
    </Parallax>
  )
}

export default Hero