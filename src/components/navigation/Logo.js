import React from "react"
import { Link } from "gatsby-theme-material-ui"
import { Typography } from "@mui/material"
const Logo = () => {
  return (
    <Link className="logo" to="/" underline="none">
      <Typography variant="subtitle2" component="p">
        {`<`}
        <span className="lg text-shadow">CC</span>
        {`/>`}
      </Typography>
    </Link>
  )
}

export default Logo
