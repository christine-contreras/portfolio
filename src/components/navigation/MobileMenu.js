import * as React from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby-theme-material-ui"
import { MenuList, MenuItem, Typography } from "@mui/material"

import { menuOpenAtom, menuItemsAtom } from "../../atoms/atoms"
import { useRecoilValue } from "recoil"

import Logo from "./Logo"
import MobileMenuButton from "./MobileMenuButton"
import MobileSocial from "./MobileSocial"
const MobileMenu = () => {
  const menuOpen = useRecoilValue(menuOpenAtom)
  const menuItems = useRecoilValue(menuItemsAtom)
  const menuBackground = {
    open: {
      clipPath: "circle(200% at 93% 3%)",
      transition: {
        type: "spring",
        duration: 2,
      },
    },
    closed: {
      clipPath: "circle(2.9% at 93% 3%)",
      transition: {
        delay: 1,
        type: "spring",
        duration: 0.5,
      },
    },
  }

  const logo = {
    open: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const list = {
    open: {
      opacity: 1,

      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
        // delay: 0.5,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        when: "afterChildren",
        // delay: 0.5,
      },
    },
  }
  const navItem = {
    open: {
      y: -50,
      originY: "50%",
      textShadow: "-4px 5px 2px #ccc",
      transition: {
        delay: 0.2,
        type: "spring",
        duration: 0.4,
      },
    },
    closed: {
      y: 0,
      originY: "50%",
      textShadow: "none",
      transition: {
        delay: 0.2,
        type: "spring",
        duration: 0.4,
      },
    },
  }

  return (
    <motion.div
      initial={false}
      animate={menuOpen ? "open" : "closed"}
      className="nav-mobile"
    >
      <motion.div variants={list}>
        <Logo />
      </motion.div>

      <motion.div className="menu-background" variants={menuBackground} />

      <MobileMenuButton />

      <MenuList component={motion.ul} variants={list}>
        {menuItems.map(item => (
          <MenuItem
            key={`mobile-nav-${item.name}`}
            component={motion.li}
            variants={navItem}
            whileHover={{
              x: 20,
              transition: { duration: 0.5 },
            }}
          >
            <Link to={item.url} className="nav-link" underline="none">
              <Typography
                component="span"
                variant="mobileLinks"
                sx={{
                  color: "background.default",
                  fontWeight: 700,
                  fontSize: "4em",
                }}
              >
                {item.name}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </MenuList>
      <motion.div variants={list} className="social">
        <MobileSocial />
      </motion.div>

      <motion.div
        variants={list}
        className="social"
        whileHover={{
          x: 20,
          transition: { duration: 0.5 },
        }}
      >
        <Link
          href="mailto: christine.e.contreras@gmail.com?subject = Job Opportunity"
          underline="always"
          color="secondary"
        >
          christine.e.contreras@gmail.com
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default MobileMenu
