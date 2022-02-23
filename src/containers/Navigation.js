import React from "react"
import "../css/nav.css"
import { Grid } from "@mui/material"
import Logo from "../components/navigation/Logo"
import DesktopMenu from "../components/navigation/DesktopMenu"
import MobileMenu from "../components/navigation/MobileMenu"
const Navigation = () => {
  return (
    <Grid
      space={2}
      p={2}
      container
      item
      alignItems="center"
      justifyContent="space-between"
      sx={{ position: "sticky" }}
    >
      <Logo />
      <Grid item xs="auto" sx={{ display: { xs: "flex", md: "none" } }}>
        <MobileMenu />
      </Grid>
      <Grid item xs="auto" sx={{ display: { xs: "none", md: "flex" } }}>
        <DesktopMenu />
      </Grid>
    </Grid>
  )
}

export default Navigation
