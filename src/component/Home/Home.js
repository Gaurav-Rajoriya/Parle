import React from 'react'
import Hero from '../Hero/Hero'
import Event from '../Event/Event'
import Offers from '../Offers/Offers'
import Team from '../Team/Team'
import Video from '../Video/Video'
import Testimonial from '../Testimonial/Testimonial'
import Gallery from '../Gallary/Gallery'
import Contact from '../Contact/Contact'

const Home = () => {
  return (
    <>
        <Hero/>
        <Event/>
        <Offers/>
        <Team/>
        <Video/>
        <Testimonial/>
        <Gallery/>
        <Contact/>
    </>
  )
}

export default Home