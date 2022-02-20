import React from "react"
import { motion } from "framer-motion"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import { Link } from "gatsby-theme-material-ui"
import { MenuItem } from "@mui/material"
const DesktopSocial = () => {
  return (
    <>
      <MenuItem
        component={motion.li}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
      >
        <Link
          href="https://www.linkedin.com/in/christinecontreras/"
          sx={{ color: "text.primary" }}
        >
          <LinkedInIcon />
        </Link>
      </MenuItem>
      <MenuItem
        component={motion.li}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
      >
        <Link
          href="https://github.com/christine-contreras"
          sx={{ color: "text.primary" }}
        >
          <GitHubIcon />
        </Link>
      </MenuItem>
    </>
  )
}

export default DesktopSocial
