import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { Typography } from "@mui/material"
const Logo = () => {
  return (
    <Link className="logo" to="/" underline="none">
      <Typography variant="subtitle1" component="p">
        Christine Contreras
      </Typography>
    </Link>
  )
}

export default Logo
