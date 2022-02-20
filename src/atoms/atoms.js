import { atom, selector } from "recoil"

export const menuItemsAtom = atom({
  key: "menuItemsAtom",
  default: [
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "mailto: christine.e.contreras@gmail.com?subject = Job Opportunity",
    },
  ],
})

// export const socialItemsAtom = atom({
//   key: "socialItemsAtom",
//   default: [
//     {
//       name: "linkedin",
//       url: "https://www.linkedin.com/in/christinecontreras/",
//     },
//     {
//       name: "github",
//       url: "https://github.com/christine-contreras",
//     },
//   ],
// })

export const menuOpenAtom = atom({
  key: "menuOpenAtom",
  default: false,
})

export const toggleMenuOpenAtom = selector({
  key: "toggleMenuOpenAtom",
  get: ({ get }) => {
    const menuOpen = get(menuOpenAtom)
    return menuOpen
  },
  set: ({ get, set }) => {
    const menuOpen = get(menuOpenAtom)
    set(menuOpenAtom, !menuOpen)
  },
})
