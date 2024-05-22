import React from 'react'
import { RiReactjsLine,RiTailwindCssLine,RiNodejsLine   } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaGitSquare } from "react-icons/fa";
import { BsFiletypeSql } from "react-icons/bs";
import {motion} from 'framer-motion';

const iconVariants = (duration) => ({
  initial :{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat:Infinity,
      repeatType:"reverse",
    }
  }
})

const Skills = () => {
  return (
    <div id='Skills' className='bg-[#090c10] pb-20 pt-10'>
        <h1 className='mb-10 text-center text-4xl text-sky-300'>Skills</h1>
        <div className='flex flex-wrap items-center  justify-center gap-4'>
          <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className='rounded-2xl  border-4  border-neutral-800 p-2'>
            <RiTailwindCssLine  className='text-6xl text-sky-600' />
            
          </motion.div>
          <motion.div variants={iconVariants(3)}
          initial="initial"
          animate="animate"
           className='rounded-2xl  border-4  border-neutral-800 p-2'>
            <RiReactjsLine className='text-6xl text-cyan-400' />
          </motion.div>
          <motion.div variants={iconVariants(5)}
          initial="initial"
          animate="animate" className='rounded-2xl  border-4  border-neutral-800 p-2'>

            <RiNodejsLine  className='text-6xl text-green-400' />
          </motion.div>
          <motion.div variants={iconVariants(2)}
          initial="initial"
          animate="animate"
           className='rounded-2xl  border-4  border-neutral-800 p-2'>
            <SiMongodb className='text-6xl text-green-600' />
          </motion.div>
          <motion.div variants={iconVariants(6)}
          initial="initial"
          animate="animate"
           className='rounded-2xl  border-4  border-neutral-800 p-2'>
            <BsFiletypeSql className='text-6xl text-purple-400' />
          </motion.div>
          <motion.div variants={iconVariants(4)}
          initial="initial"
          animate="animate"
           className='rounded-2xl  border-4  border-neutral-800 p-2'>
            <FaGitSquare className='text-6xl text-[#E84D31]' />
          </motion.div>
        </div>
    </div>
  )
}

export default Skills
