import React from "react"

import Header from "../components/Header"
import Global  from "../components/Global"

function Layout({ children }) {
  return (
    <>
      <Global/>
      <Header />
      <div>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
