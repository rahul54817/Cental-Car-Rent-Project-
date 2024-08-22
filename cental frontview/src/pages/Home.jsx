import React from 'react'
import Carousel from '../components/Carousel'
import Features from '../components/Features'
import About from '../components/CentalAbout'
import FactCounter from '../components/FactCounter'
import Services from '../components/CentalServices'
// import CarsCategories from '../components/Testimonials'
import CarSteps from '../components/CarSteps'
import Blogs from '../components/CentalBlogs'
import Banner from '../components/Banner'
import Teams from '../components/Teams'
import Testimonials from '../components/Testimonials'
import CarsCategories from '../components/CarsCategories'
import CentalAbout from '../components/CentalAbout'
import CentalBlogs from '../components/CentalBlogs'

const Home = () => {
  return (
   <>
      <Carousel />
      <Features />
      <CentalAbout />
      <FactCounter />
      <Services />
      <CarsCategories />
      <CarSteps />
      <CentalBlogs />
      <Banner />
      <Teams />
      <Testimonials/>
   </>
  )
}

export default Home
