import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import GettingStarted from './components/GettingStarted'

const App = () => {
  const [isClickedMenu, setIsClickedMenu] = useState(false);
  const updateIsClickedMenu = () => {
    setIsClickedMenu(!isClickedMenu);
  }

  return (
    <div className='header w-[80%] mx-auto overflow-hidden'>
      <Header isClickedMenu={isClickedMenu} updateIsClickedMenu={updateIsClickedMenu}/>
      <Hero />
      <Features />
      <GettingStarted />
    </div>
  )
}
export default App