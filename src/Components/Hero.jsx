import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">

        <nav className='flex justify-between items-center w-full mb-10 pt-3'>

            <img src={logo} alt="logo" className='w-12 object-contain'/>

            <button type='button' onClick={() => window.open("https://github.com/Sebasxx44")}
              className="black_btn flex justify-center items-center text-center gap-2"> 
            <i class="fa-brands fa-github"></i> Github
            </button>

        </nav>

        <h1 className='head_text'>
            Sumarize Articles <br className='max-md:hidden'/>
            <span className='blue_gradient'>OpenAI GPT-4</span>
        </h1>

        <h2 className='desc'>
            Simplify your reading with Summarize, an open-source article summarizer
        </h2>

    </header>
  )
}

export default Hero