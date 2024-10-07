import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React from 'react'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Offer from './Offer/Offer'
import Products from './Products/Products'
import Card from './Card/Card'
import Services from './Services/Services'
import Deal from './Deal/Deal'
import Organic from './Organic/Organic'
import Review from './Review/Review'
import News from './News/News'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Offer />
      <Products />
      <Card />
      <Services />
      <Deal />
      <Organic />
      <Review />
      <News />
      <Footer />
    </div>
  )
}

export default App
