import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Featured from './components/Featured/Featured'
import Testimonial from './components/Testimonial/Testimonial'
import About from './components/About/About'
import Client from './components/Client/Client'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Footer2 from './components/Footer/Footer2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Featured />
    <Testimonial />
    <About />
    <Client />
    <Contact/>
    <Footer/>
    <Footer2/>

    </>
  )
}

export default App
