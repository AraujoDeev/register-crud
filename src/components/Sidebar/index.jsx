import styles from './sidebar.module.css'
import infoSidebar from '../../SidebarData'
import { useNavigate } from 'react-router-dom'

import React from 'react'

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.sidebar}>
      <ul style={styles.listaSidebar}>
        {infoSidebar.map((icone, index) => (
          <li
            className={styles.icones}
            onClick={() => navigate(icone.url)}
            key={index}
          >
            {icone.icone}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Sidebar
