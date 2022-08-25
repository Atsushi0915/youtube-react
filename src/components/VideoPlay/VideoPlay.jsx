import React from 'react'
import YouTube from 'react-youtube'
import Style from './VideoPlay.module.scss'

export const VideoPlay = (props) => {
  const { id } = props

  return (
    <div className={Style.wrap}>
      <YouTube className={Style.iframe} videoId={id} />
    </div>
  )
}
