/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { RecoilRoot } from "recoil"
import Navigation from "./Navigation"
import Footer from "../components/footer/Footer"
import "../css/layout.css"

const Layout = ({ children }) => {
  return (
    <RecoilRoot>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </RecoilRoot>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
