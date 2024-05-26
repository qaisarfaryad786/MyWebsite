import React from 'react'
import avatar from '../assets/avatar.png';
import {motion} from "framer-motion"
import {Link} from 'react-scroll';
 

const Home = () => {
  return (
      <div
      id='Home' className=' flex flex-col items-center pt-14  bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] h-screen '>
        <img src={avatar} alt="" className='w-[150px] h-auto rounded-full' />
        <p className='text-white text-2xl font-bold font-herofont pt-4'>I do code and</p>
        <p className='text-white text-2xl font-bold font-herofont'>make content <span className=' text-sky-500' >about it!</span></p>
        <div className='max-w-sm md:max-w-md lg:max-w-lg text-white font-thin font-herofont text-center text-["18px"] pt-4  '>
            <p>I am a seasoned full-stack Website engineer with over </p>
            <p>3 years of  experience, specializing in <span className='text-sky-500'>Full Stack development.</span> </p>
            <p>My expertise lies in crafting robust and scalable MERN-based </p>
            <p>architectures on the JavaScript based Coding.</p>
            {/* <span className='bg-gradient-to-r from-pink-300  via-slate-500 to-cyan-400 bg-clip-text text-4xl  text-transparent'>Full Stack Developer</span> */}
        </div>
        <div className='mt-4'>
        <Link 
      className='active:bg-cyan-500 cursor-pointer'
      to="Contact" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={500} 
    ><button className='bg-sky-500 px-8 py-2 rounded-full font-herofont font-semibold text-white hover:bg-cyan-300'>Get In Touch</button>
    </Link>
            
        </div>
      </div>
  )
}

export default Home
