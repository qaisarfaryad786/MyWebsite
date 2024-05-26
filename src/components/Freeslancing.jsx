import React from 'react'
import { TbBrandFiverr } from "react-icons/tb";
import {motion} from 'framer-motion'


const Freeslancing = () => {
  return (
    <div id='Freeslancing' className='bg-[#090c10] pb-10'>
      <h1 className='text-4xl text-cyan-300 text-center py-4'>Freelancing</h1>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1}}
      className='px-40 py-4'>
        <span className='text-gray-500 font-herofont'>As a dedicated freelancer, I can collaborate with a diverse range of clients, bringing their visions to life with precision and creativity. Whether you're looking to revamp your online presence or need a custom-built solution, I'm here to help you succeed. Let's create something amazing together!</span>
      </motion.div>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1}}
      className='flex justify-center items-center '>
                    <a href="https://www.fiverr.com/qaisarfaryad91" target="_blank" rel="noopener noreferrer">
        <button className='py-4 px-4 text-white font-semibold mt-1  bg-[#1dbf73] rounded-sm font-herofont flex justify-center items-center'><span className='text-2xl'><TbBrandFiverr /></span>Visit Profile</button>
        </a>
      </motion.div>
    </div>
  )
}

export default Freeslancing
