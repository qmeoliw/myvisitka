import { useState } from 'react'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
    <h1 className='text-[#F3A0AE]'>MARYANA</h1>
    <p className='text-[#F3A0AE]'>About</p>
    <p className='text-[#F3A0AE]'>Skills</p>
    <p className='text-[#F3A0AE]'>Projects</p>
    <p className='text-[#F3A0AE]'>Contact</p>
    <p></p>
    <button className='bg-[#F3A0AE]'>Download CV</button>
    </header>
    <section>
      <p>FRONTEND DEVELOPER</p>
      <h1>Hi, I'm <span className='text-[#F3A0AE]'>Maryana</span> <br/>
I build modern and<br/>
responsive web apps</h1><br/>
<p>IT student focused on frontend development and
web design. I create websites that are fast, clean
and easy to use.
</p>
    </section>
    </>
  )
}

export default App
