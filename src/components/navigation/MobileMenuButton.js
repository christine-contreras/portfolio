import React from "react"
import { motion } from "framer-motion"
import { toggleMenuOpenAtom } from "../../atoms/atoms"
import { useSetRecoilState } from "recoil"
const Path = props => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
)

const MobileMenuButton = () => {
  const setToggleMenu = useSetRecoilState(toggleMenuOpenAtom)
  const btn = {
    open: {
      top: "2%",
      right: "2%",
      transition: {
        type: "spring",
        duration: 0.5,
      },
    },
    closed: {
      top: "27%",
      right: "15%",
      transition: {
        delay: 1,
        type: "spring",
        duration: 0.5,
      },
    },
  }

  return (
    <motion.button onClick={setToggleMenu} className="menu-btn" variants={btn}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </motion.button>
  )
}

export default MobileMenuButton
