import React, { useContext } from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Login from './pages/Login'
import { AppContext } from './context/AppContext'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const {showLogin} =useContext(AppContext)
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-28
    min-h-screen bg-gradient-to-b from-blue-50 to-green-90
    '>
      <ToastContainer position='bottom-right' />
      <NavBar />
      {
        showLogin&&<Login />
      }
      
      <Routes>
        <Route path='/' element={<Home />}/>
       <Route path='/result' element={<Result />}/>
       
      </Routes>
     <Footer />
    </div>
  )
}

export default App
