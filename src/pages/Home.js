import React from 'react'
import Banner from "../components/Banner";
import Featured from '../components/Featured';
import VideoSection from '../components/VideoSection';

function Home() {
  return (
    <>
    <Banner />
    <Featured text={"New arrivals"} />
    <VideoSection />
    </>
    
    
  )
}

export default Home