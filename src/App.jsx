import Navbar from './components/navbar'
import Hero from './components/hero'
import Aboutme from './components/about_me'
import Services from './components/services'
import { HashRouter, Routes, Route } from 'react-router-dom';
import Office from './components/office'
import Portopolio from './components/portopolio'
import Price from './components/price'
import Contact from './components/contact'
import FloatingCTA from './components/demand';

function App() {

  return (
    <HashRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Hero />}/>

      <Route path="/aboutMe" element={<Aboutme />}/>
      <Route path="/Service" element={<Services />}/>
      <Route path="/myOffice" element={<Office/>}/>
      <Route path="/portopolio" element={<Portopolio/>}/>
      <Route path="/price" element={<Price/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <FloatingCTA/>

    </HashRouter>
  )
}

export default App