import React from "react"
import { Grid, Typography } from "@mui/material"
const Footer = () => {
  return (
    <footer>
      <Grid container alignItems="center" justifyContent="center">
        <Typography>
          Copyright &copy; Christine Contreras {new Date().getFullYear()}
        </Typography>
      </Grid>
    </footer>
  )
}

export default Footer
