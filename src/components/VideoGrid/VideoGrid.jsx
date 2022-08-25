import React from 'react'
import Style from './VideoGrid.module.scss'

const VideoGrid = (props) => {
  const { children } = props
  return (
    <div className={Style.container} >
      {children}
    </div>
  )
}

export default VideoGrid
