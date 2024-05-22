import React from 'react'
import { FaLinkedin,FaGithub  } from "react-icons/fa6";
import {Link} from 'react-scroll';


const Navbar = () => {
  return (
    <div className='bg-[#222222]'>
    <div className='flex justify-between items-center text-white h-14 mx-10'>
    <h1 class="uppercase tracking-wider font-semibold  text-sky-500 text-2xl font-herofont"><span class="uppercase text-white">web</span>dev</h1>
      <div className='flex gap-4 font-herofont font-medium'>
      <Link 
      className='active:bg-cyan-500 cursor-pointer'
      to="Home" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
    >Home</Link>    
<Link 
      className='active:bg-cyan-500 cursor-pointer'
      to="Skills" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
    >Skills</Link>      
<Link 
      className='active:bg-cyan-500 cursor-pointer'
      to="About" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
    >About</Link>   
<Link 
      className='active:bg-cyan-500 cursor-pointer'
      to="Contact" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
    >Contact</Link>
    <Link 
      className='active:bg-cyan-500 cursor-pointer'
      to="Freeslancing" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
    >Freelancing</Link>
      </div>
      <div className=' flex gap-2 text-blue-800 bg-black rounded-full p-2 px-4 text-xl hover:bg-blue-600'>
      <a href="https://www.linkedin.com/in/qaisar-faryad/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/qaisarfaryad786" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      </div>
    </div>
    </div>
  )
}

export default Navbar

