import React from 'react'
import Image from 'next/image'
import PodcastOne from '../assets/podcast-one.png'
import PodcastTwo from '../assets/podcast-two.png'
import PodcastThree from '../assets/podcast-three.png'
import PodcastFour from '../assets/podcast-four.png'
import PodcastFive from '../assets/podcast-five.png'
import PodcastSix from '../assets/podcast-six.png'

const Podcast = () => {
  return (
    <ul className='flex md:items-center justify-between flex-col md:flex-row pr-4 pl-4 w-full'>
      <li className='text-lg uppercase'>podcast available on</li>
      <li className='md:w-[40%] w-full'>
        <ul className='w-full flex justify-between items-center'>
            <li className=''>
              <Image src={PodcastOne} alt='podcast' className='w-15 h-15 object-container' />
            </li>
            <li className=''>
              <Image src={PodcastTwo} alt='podcast' className='w-15 h-15 object-container' />
            </li>
            <li className=''>
              <Image src={PodcastThree} alt='podcast' className='w-15 h-15 object-container' />
            </li>
            <li className=''>
              <Image src={PodcastFour} alt='podcast' className='w-15 h-15 object-container' />
            </li>
            <li className=''>
              <Image src={PodcastFive} alt='podcast' className='w-15 h-15 object-container' />
            </li>
            <li className=''>
              <Image src={PodcastSix} alt='podcast' className='w-15 h-15 object-container' />
            </li>
        </ul>
      </li>
    </ul>
  )
}

export default Podcast
