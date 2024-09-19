import React from 'react'
import Home from './pages/home/Home'
import Header from './components/header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactUs from './pages/contactus/ContactUs'

function App() {
  return (
    <div>
      <Header/>
       <BrowserRouter>
       <Routes>

        <Route path='/' element={ <Home/>}/>
        <Route path='/contact' element={ <ContactUs/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App