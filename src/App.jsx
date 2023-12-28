
import { Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/about'
import Home from './pages/home'
import Contact from './pages/Contact'
import Navbar from './Components/Navbar'
import Blogs from './pages/Blogs'

function App() {
  return (
    <>
    <Navbar/>
<Routes>
  <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/blogs' element={<Blogs/>}/>
</Routes>
    </>

   
  )
  
  
}

export default App
