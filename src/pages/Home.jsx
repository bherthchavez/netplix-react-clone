import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
        <Main />
        <Row rowID='1'  title='NowPlaying' fetchUrl={requests.requestNowPlaying}/>
        <Row rowID='2'  title='Papular' fetchUrl={requests.requestPopular}/>
        <Row rowID='3' title='TopRated' fetchUrl={requests.requestTopRated}/>
        <Row rowID='4' title='Trending' fetchUrl={requests.requestTrending}/>
        <Row rowID='5' title='UpComing' fetchUrl={requests.requestUpcoming}/>
    </div>
  )
}

export default Home