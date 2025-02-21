"use client"

import React, { useState } from 'react'
import HeroSectionImage from '../assets/header-image-one.png'
import SecondImage from '../assets/header-image-two.png'
import NavbarMobileImage from '../assets/navbar-mobile-image.png'
import Image from 'next/image'
import Logo from '../assets/logo.png'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Header = () => {

    const [menuIsClicked, setMenuIsClicked] = useState(false)
    const [languageIsSwitched, setLanguageIsSwitched] = useState(true)
    const [seasonIsHovered, setSeasonIsHovered] = useState(false)

  return (
    // <header className='h-[105vh] bg-cover bg-no-repeat flex flex-col justify-between relative' style={{ backgroundImage: `url(${HeroSectionImage.src})` }}></header>
    <header className='md:h-[105vh] h-[115vh] bg-[#1b1b1b] flex flex-col justify-between relative'>
      <nav className='flex justify-between items-center w-screen h-[15vh] pl-4 pr-4 md:p-0'>
        <ul className='w-[10vw] hidden md:block'></ul>
        <ul className='flex gap-20 items-center w-[65vw] pl-8 relative'>
          <li className='text-white text-xl font-bold capitalize hidden md:block' onMouseEnter={ () => setSeasonIsHovered(true) }>
              <a className='text-decoration-none transition duration-300 hover:text-orange-600' href='#'>seasons</a>
              { seasonIsHovered && <ul className='absolute md:flex flex-col hidden min-h-[15vh] w-[10vw] top-full left-0 bg-white' onMouseLeave={ () => setSeasonIsHovered(false) }>
                  <li className='capitalize text-sm text-black font-bold p-1'>season 1</li>
                  <li className='capitalize text-sm text-black font-bold p-1'>season 2</li>
                  <li className='capitalize text-sm text-black font-bold p-1'>season 3</li>
                  <li className='capitalize text-sm text-black font-bold p-1'>upcoming seasons</li>
              </ul> }
          </li>
          <li className='text-white text-xl font-bold capitalize hidden md:block'><a className='text-decoration-none transition duration-300 hover:text-red-600' href='#'>projects</a></li>
          <li className=''>
              <Image src={Logo} alt='logo' width={130} height={130} className='object-contain' />
          </li>
          <li className='text-white text-xl font-bold capitalize hidden md:block'><a className='text-decoration-none transition duration-300 hover:text-red-600' href='#'>about</a></li>
          <li className='text-white text-xl font-bold capitalize hidden md:block'><a className='text-decoration-none transition duration-300 hover:text-red-600' href='#'>contact</a></li>
        </ul>
        <ul className='w-[10vw] hidden md:flex gap-2 items-center'>
          <li className={ languageIsSwitched ? 'text-red-600 text-xl font-bold uppercase' : 'text-white text-xl font-bold uppercase transition duration-300 hover:text-red-600' } onClick={ () => setLanguageIsSwitched(true) }>en</li>
          <li className='text-red-600 text-xl font-bold'>|</li>
          <li className={ languageIsSwitched ? 'text-white text-xl font-bold uppercase transition duration-300 hover:text-red-600' : 'text-red-600 text-xl font-bold uppercase' } onClick={ () => setLanguageIsSwitched(false) }>ar</li>
        </ul>
        <button onClick={ () => setMenuIsClicked(!menuIsClicked) } className='text-white md:hidden'>
          { menuIsClicked ? <XIcon className='w-14 h-14 animate-fadeIn' /> : <MenuIcon className='w-14 h-14 animate-fadeIn' /> }
        </button>
      </nav>
      { menuIsClicked && <ul className='flex flex-col gap-6 ml-10 animate-fadeIn'>
          <li className='text-white text-xl font-bold capitalize'><a className='text-decoration-none transition duration-300 hover:text-red-600' href='#'>seasons</a></li>
          <li className='text-white text-xl font-bold capitalize'><a className='text-decoration-none transition duration-300 hover:text-red-600' href='#'>about</a></li>
          <li className='text-white text-xl font-bold capitalize'><a className='text-decoration-none transition duration-300 hover:text-red-600' href='#'>contact</a></li>
          <li className='text-white text-xl font-bold capitalize'><a className='text-decoration-none transition duration-300 hover:text-red-600' href='#'>projects</a></li>
          <li className='text-white text-xl font-bold capitalize'>
          <ul className='w-[10vw] flex gap-2 items-center'>
            <li className={ languageIsSwitched ? 'text-red-600 text-xl font-bold uppercase' : 'text-white text-xl font-bold uppercase transition duration-300 hover:text-red-600' } onClick={ () => setLanguageIsSwitched(true) }>en</li>
            <li className='text-red-600 text-xl font-bold'>|</li>
            <li className={ languageIsSwitched ? 'text-white text-xl font-bold uppercase transition duration-300 hover:text-red-600' : 'text-red-600 text-xl font-bold uppercase' } onClick={ () => setLanguageIsSwitched(false) }>ar</li>
          </ul>
          </li>
      </ul> }
      { !menuIsClicked && <section className='uppercase flex flex-col gap-2 pl-10 pr-10 w-[90vw] md:w-[60vw] md:absolute md:top-[35%] md:left-0 animate-fadeIn'>
        <h1 className='md:text-4xl text-2xl text-red-500 font-extrabold md:font-bold'>a podcast</h1>
        <p className='md:text-6xl text-4xl text-white font-extrabold md:font-bold'>retracing <span className='text-red-500'>lebanon</span>'s modern history</p>
      </section> }
      <Image src={ !menuIsClicked ? SecondImage : NavbarMobileImage} alt='hero-section' className='object-contain self-center md:self-end md:pb-10 md:h-[55vh] md:w-[55vw] h-[30%] w-[90%] animate-fadeIn' />
    </header>
  )
}

export default Header
