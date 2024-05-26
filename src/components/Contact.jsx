import React from 'react'
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin  } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import {motion} from 'framer-motion'




const Contact = () => {
  return (
    <motion.div
    whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1}}
    id='Contact'>
      <section>
    <div className="  flex flex-col  bg-[#090c10] backdrop-blur-lg md:flex-row justify-evenly  ">
        <motion.div className="flex flex-col gap-4 mt-6 sm:ml-10 justify-center items-center">
        <div id="text">
            <h1 className="text-white font-bold text-3xl shadow-sm  ">Contact <span className="text-cyan-500">Me</span></h1>
        </div>
        <div>
            <p className="text-gray-500">One way to categories the activities is in terms <br></br>  of the Professional's area of expertise</p>
        </div>
        <div className="flex gap-3">
        <a href="https://wa.me/+923055796048" target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare className='text-4xl text-green-500'/>
            </a>
            <a href="https://www.linkedin.com/in/qaisar-faryad/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='text-4xl text-sky-500'/>
            </a>
            <a href="https://www.fiverr.com/qaisarfaryad91" target="_blank" rel="noopener noreferrer">
            <TbBrandFiverr className='text-4xl text-green-500'/>  
              </a>
        </div>
    </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className="w-full max-w-sm items-center ml-10 sm:mt-2">
            <form className="bg-[#222222] shadow-md rounded px-8 pt-6 pb-8 mb-4" onsubmit="sendEmail();">
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" for="name">
                  Name
                </label>
                <input className=" bg-gray-300 outline outline-neutral-400 caret-cyan-900  shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
              </div>
              <div className="mb-2">
                <label className="block text-white text-sm font-bold mb-2" for="password">
                  Email
                </label>
                <input className="shadow outline outline-neutral-400  caret-cyan-900 bg-gray-300 appearance-none border  rounded w-full py-2 px-3 text-white mb-3 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="John@gmail.com" />
              </div>
              <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" for="Message">
                  Message
                </label>
                <textarea name="message" id="" cols="40" rows="4" className="shadow  outline-neutral-400p-2 appearance-none border rounded bg-gray-300 caret-cyan-900" placeholder="Message" ></textarea>     
              </div>
              <div className="flex items-center justify-between">
                <button className="bg-cyan-600 hover:bg-cyan-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                  SEND
                </button>
              </div>
            </form>
          </motion.div>
    </div>
</section>
    </motion.div>
  )
}

export default Contact
