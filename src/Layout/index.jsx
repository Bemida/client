import React from 'react'
import styles from './style.module.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Grid from './Grid'

//Creator : didi - change Body to Grid


function Layout() {
  return (
    <div className={styles.containerLayout}>

      <Header />
      <Sidebar />
      <Grid />
    </div>
  )
}

export default Layout