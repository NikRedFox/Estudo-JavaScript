import './App.css'
import Contact from './pages/pageContact/contact'
import Home from './pages/pageHome'
import Menu from './pages/pageMenu'
import Page404 from './pages/page404/page404'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cardapio' element={<Menu/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<Page404/>}/>
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
