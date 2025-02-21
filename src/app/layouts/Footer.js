import React from 'react'
import Image from 'next/image'
import Logo from '../assets/logo.png'
import IconOne from '../assets/footer-one.png'
import IconTwo from '../assets/footer-two.png'
import IconThree from '../assets/footer-three.png'
import IconFour from '../assets/footer-four.png'
import IconFive from '../assets/footer-five.png'
import IconSix from '../assets/footer-six.png'
import IconSeven from '../assets/footer-seven.png'
import Patreon from '../assets/patreon.png'

const Footer = () => {
  return (
    <footer className='w-full h-[80vh] md:h-[45vh] bg-black flex justify-center overflow-y-hidden'>
      <ul className='w-[90%] h-full flex-col justify-between mt-8'>
        <li className='w-full h-[80%]'>
          <ul className='flex h-full flex-col md:flex-row justify-between pb-8 md:pb-0'>
            <li className='md:w-[30%] w-[90%]'>
              <ul className='w-full flex flex-col gap-3'>
                <li className=''>
                  <Image src={Logo} alt='logo' className='object-contain' />
                </li>
                <li className=''>
                  <p className='text-white text-sm'>
                    Maabar explores Lebanon's modern history through the stories of its people, blending oral history and documentary storytelling. Each episode is a crossing-off borders, memories and perspectives.
                  </p>
                </li>
                <li className=''>
                  <ul className='flex items-center gap-5'>
                    <Image src={IconOne} alt='one' className='object-contain' />
                    <Image src={IconTwo} alt='two' className='object-contain' />
                    <Image src={IconThree} alt='three' className='object-contain' />
                    <Image src={IconFour} alt='four' className='object-contain' />
                    <Image src={IconFive} alt='five' className='object-contain' />
                    <Image src={IconSix} alt='six' className='object-contain' />
                    <Image src={IconSeven} alt='seven' className='object-contain' />
                  </ul>
                </li>
              </ul>
            </li>
            <li className='w-[10%] hidden md:flex'>
              <ul className='w-full flex flex-col gap-4'>
                <li className='capitalize text-white text-xl font-bold'><a href='#'>season 1</a></li>
                <li className='capitalize text-white text-xl font-bold'><a href='#'>season 2</a></li>
                <li className='capitalize text-white text-xl font-bold'><a href='#'>season 3</a></li>
              </ul>
            </li>
            <li className='w-[10%] hidden md:flex'>
              <ul className='w-full flex flex-col gap-4'>
                <li className='capitalize text-white text-xl font-bold'><a href='#'>projects</a></li>
                <li className='capitalize text-white text-xl font-bold'><a href='#'>about</a></li>
                <li className='capitalize text-white text-xl font-bold'><a href='#'>contact</a></li>
                <li className='capitalize text-white text-xl font-bold'><a href='#'>news</a></li>
              </ul>
            </li>
            <li className='md:w-[20%] w-[90%]'>
              <ul className='w-full flex flex-col gap-4'>
                <li className='capitalize text-orange-600 text-xl font-bold'>support maabar</li>
                <li className='uppercase text-white text-md flex gap-2'><Image src={Patreon} alt='patreon' className='w-5 h-5 object-contain' /> patreon</li>
                <li className='capitalize text-orange-600 text-xl font-bold mt-3'>contact us</li>
                <li className='text-white text-md'>email@maabar.com</li>
              </ul>
            </li>
          </ul>
        </li>
        <li className='w-full h-[5vh] md:h-[10%] border-t border-white flex items-center justify-center'>
          <p className='capitalize w-full text-center text-white text-sm'>Maabar { new Date().getFullYear() } all rights reserved</p>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
