import React from 'react'
import Image from 'next/image'
import LoadingLogo from '../assets/loading-logo.png'
import LoadingCar from '../assets/loading-car.png'

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-0 h-[100vh] w-[100vw] bg-[#40683c] relative'>
      <Image src={LoadingLogo} alt='logo' className='w-[45vw] h-[40vh] absolute top-[35%] left-[25%]' />
      <Image src={LoadingCar} alt='car' className='w-[30vw] h-[25vh] animate-moveLeft' />
    </div>
  )
}

export default Loading
