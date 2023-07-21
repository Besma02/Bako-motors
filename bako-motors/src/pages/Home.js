import React from 'react'
import HeaderSlide from '../components/UI/HeaderSlide'
import About from '../components/UI/About'
import BakoInfo from '../components/UI/BakoInfo'
import BoubakerSiala from '../components/UI/BoubakerSiala'
import TeamMember from '../components/UI/TeamMember'
import BakoB1 from '../components/UI/BakoB1'

const Home = () => {
  return (
    <div>
      <HeaderSlide/>
      <About/>
      <BakoInfo/>
      <BoubakerSiala/>
      <TeamMember/>
      <BakoB1/>
    </div>
  )
}

export default Home