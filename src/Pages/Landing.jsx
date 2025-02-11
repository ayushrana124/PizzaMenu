import React from 'react'
import HomePage from './HomePage'
import MenuPage from './MenuPage'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'
import Review from '../components/contact/Review'

const Landing = () => {
  return <>
    < HomePage />
    < MenuPage />
    <Contact />
    <Review />
    <Footer />
    </>
}

export default Landing