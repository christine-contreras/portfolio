/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { RecoilRoot } from "recoil"
import "../css/layout.css"

import { Grid } from "@mui/material"
import Navigation from "./Navigation"
import Footer from "../components/footer/Footer"

const Layout = ({ children }) => {
  return (
    <RecoilRoot>
      <Grid
        container
        flexDirection="column"
        // sx={{ height: "100vh" }}
        justifyContent="space-between"
      >
        <Navigation />

        <Grid
          item
          flexGrow={1}
          sx={{
            zIndex: -1,
            "& main": {
              height: "100%",
            },
          }}
        >
          <main>{children}</main>
        </Grid>
        {/* <Grid item>
          <Footer />
        </Grid> */}
      </Grid>
    </RecoilRoot>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
