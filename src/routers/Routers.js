import React from 'react'
import {Routes,Route} from'react-router-dom'
import Home from '../pages/Home'
import BakoB1 from '../pages/BakoB1'
import Services from '../pages/Services'
import CarDetails from '../pages/CarDetails'
import Blog from '../pages/Blog'
import BlogDetails from '../pages/BlogDetails'
import Contact from '../pages/Contact'
//import NotFound from '../pages/NotFound'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/BakoB1' element={<BakoB1/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/Cars/:id' element={<CarDetails/>}/>
        <Route path='/Blog' element={<Blog/>}/>
        <Route path='/Blog/:ref' element={<BlogDetails/>}/>
        <Route path='/contact' element={<Contact/>}/>
        {/* <Route path='*' element={<NotFound/>}/> */}

    </Routes>
  )
}

export default Routers