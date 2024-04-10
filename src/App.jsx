import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/home'
import Deals from './Components/deals/deals'
import Features from './Components/Features/Features'
import Commitments from './Components/Commitments/Commitments'
import Info from './Components/Info/Info'
import StrategyO from './Components/Startegy/StartegyO'
import StrategyT from './Components/Startegy/StrategyT'
import Traffic from './Components/Traffic/Traffic'
import FAQ from './Components/FAQ/FAQ'
import Footer from './Components/Footer/Footer'



const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Deals />
      <Features />
      <Commitments />
      <Info />
      <hr className='divider' />
      <StrategyO />
      <StrategyT />
      <Traffic />
      <hr className='divider' />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
