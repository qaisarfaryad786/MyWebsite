import React from 'react'
import image from '../assets/qaisar.jpeg'
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div id='About' className='bg-[#090c10] p-4'>
        <h1 className='my-6 text-4xl text-center text-cyan-500 font-herofont'>About Me</h1>
        <div className='flex flex-col justify-center items-center md:flex-row '>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1}}
      className='p-4'
      >
        <img src={image} alt="" className='w-[400px] h-auto rounded-md' />
      </motion.div>
      <motion.div
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:100}}
      transition={{duration:1}}
      className='max-w-sm p-4 md:max-w-md lg:max-w-lg'>
        <p className =" text-left text-gray-500 ">
        Hi there! I'm <span className='text-normal tracking-wider text-cyan-300'>Qaisar Faryad</span>, a passionate MERN stack developer with a knack for creating dynamic, responsive, and user-friendly web applications. With a deep understanding of MongoDB, Express.js, React, and Node.js, I bring a wealth of expertise to every project, turning ideas into seamless digital experiences.</p></motion.div>
      </div>
    </motion.div>
  )
}

export default About
