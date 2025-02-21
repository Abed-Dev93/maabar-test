import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'
import ProjectImage from '../assets/project-image.png'

const Project = () => {
  return (
    <section className='flex flex-col w-full min-h-[90vh] pl-4 pr-4 mt-10'>
            <h2 className='uppercase text-5xl font-extrabold'> our <span className=''>projects</span></h2>
            <Swiper
                className='flex flex-col md:flex-row w-full md:h-[70vh] h-[65vh] mt-7'
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={2}
                navigation={false}
            >
                <SwiperSlide>
                    <figure className='md:h-full flex flex-col justify-between'>
                        <Image src={ProjectImage} alt='project' className='h-[95%] w-full' />
                        <figcaption className='text-lg font-extrabold w-full capitalize'>sound installation</figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className='md:h-full flex flex-col justify-between'>
                        <Image src={ProjectImage} alt='project' className='h-[95%] w-full' />
                        <figcaption className='text-lg font-extrabold w-full capitalize'>sound installation</figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className='md:h-full flex flex-col justify-between'>
                        <Image src={ProjectImage} alt='project' className='h-[95%] w-full' />
                        <figcaption className='text-lg font-extrabold w-full capitalize'>sound installation</figcaption>
                    </figure>
                </SwiperSlide>
                <SwiperSlide>
                    <figure className='md:h-full flex flex-col justify-between'>
                        <Image src={ProjectImage} alt='project' className='h-[95%] w-full' />
                        <figcaption className='text-lg font-extrabold w-full capitalize'>sound installation</figcaption>
                    </figure>
                </SwiperSlide>
            </Swiper>
        </section>
  )
}

export default Project
