import React, { useContext, useEffect } from 'react'
import { fetchPopularData } from '../api'
import Layout from '../components/Layout/Layout'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import VideoGridItem from '../components/VideoGridItem/VideoGridItem'

import { Store } from '../store'


const Top = () => {
  const { globalState, setGlobalState } = useContext(Store)

  useEffect(() => {
    fetchPopularData().then((res) => {
      console.log('data', res)
      setGlobalState({type: 'SET_POPULAR', payload: {popular: res.data.items}})
    })
  // eslint-disable-next-line
  }, [])

  return (
    <Layout>
      <VideoGrid>
        { 
          globalState.popular && globalState.popular.map((popular) => {
            return (
              <VideoGridItem
                id={popular.id}
                key={popular.id}
                src={popular.snippet.thumbnails.medium.url}
                title={popular.snippet.title}
              />
            )
          })
        }
      </VideoGrid>
    </Layout>
  )
}

export default Top
