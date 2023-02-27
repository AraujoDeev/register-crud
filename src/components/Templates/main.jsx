import './main.css'

import React from 'react'
import Sidebar from '../Sidebar'
import '../../global.css'

function MainTemplate({ children }) {
  return (
    <div className="App">
      <Sidebar />
      <div className="main">{children}</div>
    </div>
  )
}

export default MainTemplate
