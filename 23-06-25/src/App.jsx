import './App.css'
import Contact from './pages/pageContact/contact'
import Home from './pages/pageHome'
import Menu from './pages/pageMenu'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cardapio' element={<Menu/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </BrowserRouter>

    // <>
    //   <Home/>
    //   <Menu/>
    //   <Contact/>
    // </>
  )
}

export default App
