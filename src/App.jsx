import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import cardData from './data/data.js'

function App() {

  const cardElements = cardData.map(card => (
    <Card title={card.title} name={card.name} price={card.price} country={card.country} rate={card.rate} img={card.img} reviewCount={card.reviewCount} sold={card.sold}/>
  ))


  return (
    <>
      <Navbar />
      <Hero />
      <div className='card-lists'>      
        {cardElements}
      </div>
    </>
  )
}

export default App
