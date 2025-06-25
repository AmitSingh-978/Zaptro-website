import React from 'react'
import Carsousel from '../Components/Carsousel'
import MidBanner from '../Components/MidBanner'
import Feathures from '../Components/Features'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div className='text-red-400'> 
    <Carsousel />
    <MidBanner />
    <Feathures />
    <Footer />
    </div>
  )
}

export default Home
