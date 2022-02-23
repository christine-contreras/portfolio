import * as React from "react"
import { Button } from "@mui/material"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import { useSpring, animated, config } from "react-spring"

const AnimatedButton = () => {
  const [hover, setHover] = React.useState(false)
  const styles = useSpring({
    config: config.molasses,
    loop: true,
    to: [{ y: 40 }, { y: 0 }],
    from: { y: 0 },
  })

  return (
    <Button
      endIcon={<ArrowDownwardIcon />}
      size="large"
      color="secondary"
      sx={{ fontSize: "2em" }}
      className="btn text-shadow h1"
      component={animated.button}
      style={styles}
    >
      View Work
    </Button>
  )
}

export default AnimatedButton
