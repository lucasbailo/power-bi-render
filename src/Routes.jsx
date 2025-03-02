import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import Header from './components/Header'
import Forms from './components/Forms'
import Footer from './components/Footer'
import About from './components/About'

function AppRoutes() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/sobre' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
