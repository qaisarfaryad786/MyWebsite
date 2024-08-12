import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <div className="bg-[#222222] fixed w-full z-10">
      <div className="flex justify-between items-center text-white h-14 mx-10">
        <h1 className="uppercase tracking-wider font-semibold text-sky-500 text-2xl font-herofont">
          <span className="uppercase text-white">web</span>dev
        </h1>
        <div className="md:hidden" onClick={handleNavToggle}>
          {navOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
        </div>
        <div className="hidden md:flex gap-4 font-herofont font-medium">
          <Link className="active:bg-cyan-500 cursor-pointer" to="Home" spy={true} smooth={true} offset={-70} duration={500}>
            Home
          </Link>
          <Link className="active:bg-cyan-500 cursor-pointer" to="Skills" spy={true} smooth={true} offset={-70} duration={500}>
            Skills
          </Link>
          <Link className="active:bg-cyan-500 cursor-pointer" to="About" spy={true} smooth={true} offset={-70} duration={500}>
            About
          </Link>
          <Link className="active:bg-cyan-500 cursor-pointer" to="Contact" spy={true} smooth={true} offset={-70} duration={500}>
            Contact
          </Link>
          <Link className="active:bg-cyan-500 cursor-pointer" to="Freelancing" spy={true} smooth={true} offset={-70} duration={500}>
            Freelancing
          </Link>
        </div>
        <div className="hidden md:flex gap-2 text-blue-800 bg-black rounded-full p-2 px-4 text-xl hover:bg-blue-600">
          <a href="https://www.linkedin.com/in/qaisar-faryad/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/qaisarfaryad786" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
      {navOpen && (
        <div className="md:hidden flex flex-col items-center bg-[#222222] text-white py-4 space-y-4">
          <Link className="active:bg-cyan-500 cursor-pointer" to="Home" spy={true} smooth={true} offset={-70} duration={500} onClick={handleNavToggle}>
            Home
          </Link>
          <Link className="active:bg-cyan-500 cursor-pointer" to="Skills" spy={true} smooth={true} offset={-70} duration={500} onClick={handleNavToggle}>
            Skills
          </Link>
          <Link className="active:bg-cyan-500 cursor-pointer" to="About" spy={true} smooth={true} offset={-70} duration={500} onClick={handleNavToggle}>
            About
          </Link>
          <Link className="active:bg-cyan-500 cursor-pointer" to="Contact" spy={true} smooth={true} offset={-70} duration={500} onClick={handleNavToggle}>
            Contact
          </Link>
          <Link className="active:bg-cyan-500 cursor-pointer" to="Freelancing" spy={true} smooth={true} offset={-70} duration={500} onClick={handleNavToggle}>
            Freelancing
          </Link>
          <div className="flex gap-2 text-blue-800 bg-black rounded-full p-2 px-4 text-xl hover:bg-blue-600">
            <a href="https://www.linkedin.com/in/qaisar-faryad/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/qaisarfaryad786" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
