import React from "react"
import { motion } from "framer-motion"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import GitHubIcon from "@mui/icons-material/GitHub"
import { Link } from "gatsby-theme-material-ui"
import { MenuItem, MenuList } from "@mui/material"
import { menuOpenAtom } from "../../atoms/atoms"
import { useRecoilValue } from "recoil"

const MobileSocial = () => {
  const menuOpen = useRecoilValue(menuOpenAtom)

  const socialItems = {
    open: {
      y: -50,
      transition: {
        delay: 0.6,
        type: "spring",
        duration: 0.4,
      },
    },
    closed: {
      y: 0,
      transition: {
        delay: 0.6,
        type: "spring",
        duration: 0.6,
      },
    },
  }

  return (
    <MenuList className="flex">
      <MenuItem
        component={motion.li}
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={socialItems}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
      >
        <Link href="https://www.linkedin.com/in/christinecontreras/">
          <LinkedInIcon />
        </Link>
      </MenuItem>
      <MenuItem
        component={motion.li}
        initial={false}
        animate={menuOpen ? "open" : "closed"}
        variants={socialItems}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.5 },
        }}
      >
        <Link href="https://github.com/christine-contreras">
          <GitHubIcon />
        </Link>
      </MenuItem>
    </MenuList>
  )
}

export default MobileSocial
