import React from "react"
import { menuItemsAtom } from "../../atoms/atoms"
import { useRecoilValue } from "recoil"
import { motion } from "framer-motion"
import { Link } from "gatsby-theme-material-ui"
import { MenuList, MenuItem } from "@mui/material"
import DesktopSocial from "./DesktopSocial"

const DesktopMenu = () => {
  const menuItems = useRecoilValue(menuItemsAtom)

  return (
    <MenuList className="nav-desktop flex">
      <DesktopSocial />
      {menuItems.map(item => (
        <MenuItem
          key={`desktop-nav-${item.name}`}
          component={motion.li}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.5 },
          }}
        >
          <Link
            to={item.url}
            className="nav-link"
            underline="none"
            sx={{ color: "text.primary" }}
          >
            {item.name}
          </Link>
        </MenuItem>
      ))}
    </MenuList>
  )
}

export default DesktopMenu
