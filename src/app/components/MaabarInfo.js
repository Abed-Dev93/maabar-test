import React, { useEffect } from 'react'
import Image from 'next/image'
import WhatMaabar from '../assets/what-maabar.png'
import WhyMaabar from '../assets/why-maabar.png'
import HowMaabarOne from '../assets/how-maabar-one.png'
import HowMaabarTwo from '../assets/how-maabar-two.png'
import HowMaabarThree from '../assets/how-maabar-three.png'
import ShareStory from '../assets/share-story.png'

const MaabarInfo = () => {
  return (
    <section className='pl-4 pr-4 flex flex-col gap-10 w-full'>
      <article id='what-maabar' className='w-full flex justify-between items-center'>
        <ul className='w-[50%] flex flex-col gap-4'>
            <li className=''>
                <h2 className='uppercase text-5xl font-extrabold'> what is <span className=''>maabar?</span></h2>
            </li>
            <li className=''>
                <p className='text-lg pl-10 opacity-[0.9]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </li>
            <li className='mt-3'>
                <a href='#' className='capitalize p-4 bg-[#40683c] text-white font-bold'>learn more</a>
            </li>
        </ul>
        <Image src={WhatMaabar} alt='what-maabar' className='animate-slideMaabarLeft' />
      </article>
      <article id='why-maabar' className='w-full flex justify-between items-center mt-15'>
        <Image src={WhyMaabar} alt='why-maabar' className='animate-slideMaabarRight' />
        <ul className='w-[50%] flex flex-col gap-4'>
            <li className=''>
                <h2 className='uppercase text-5xl font-extrabold'> why is <span className=''>maabar?</span></h2>
            </li>
            <li className=''>
                <p className='text-lg opacity-[0.9]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </li>
            <li className='mt-3'>
                <a href='#' className='capitalize p-4 bg-[#40683c] text-white font-bold'>learn more</a>
            </li>
        </ul>
      </article>
      <article id='how-maabar' className='w-full flex justify-between items-center'>
        <ul className='w-[50%] flex flex-col gap-4'>
            <li className=''>
                <h2 className='uppercase text-5xl font-extrabold'> how is <span className=''>maabar?</span></h2>
            </li>
            <li className=''>
                <p className='text-lg opacity-[0.9]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </li>
            <li className='mt-3'>
                <a href='#' className='capitalize p-4 bg-[#40683c] text-white font-bold'>learn more</a>
            </li>
        </ul>
        <ul className='flex width-[45%] justify-between'>
            <li className=''>
                <Image src={HowMaabarOne} alt='how-maabar' className='animate-slideMaabarTop' />
            </li>
            <li className=''>
                <Image src={HowMaabarTwo} alt='how-maabar' className='animate-slideMaabarRightHow' />
            </li>
            <li className=''>
                <Image src={HowMaabarThree} alt='how-maabar' className='animate-slideMaabarLeft' />
            </li>
        </ul>
      </article>
      <article id='share-story' className='w-full flex justify-between items-center mt-15'>
        <Image src={ShareStory} alt='share-story' className='animate-slideMaabarRight' />
        <ul className='w-[50%] flex flex-col gap-4'>
            <li className=''>
                <h2 className='uppercase text-5xl font-extrabold'> share <span className=''>your story</span></h2>
            </li>
            <li className=''>
                <p className='text-lg opacity-[0.9]'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                </p>
            </li>
            <li className='mt-3'>
                <a href='#' className='capitalize p-4 bg-[#40683c] text-white font-bold'>learn more</a>
            </li>
        </ul>
      </article>
    </section>
  )
}

export default MaabarInfo
