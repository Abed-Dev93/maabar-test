import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import Image from 'next/image'
import PodcastOne from '../assets/podcast-one.png'
import PodcastTwo from '../assets/podcast-two.png'
import PodcastThree from '../assets/podcast-three.png'
import PodcastFour from '../assets/podcast-four.png'
import PodcastFive from '../assets/podcast-five.png'
import PodcastSix from '../assets/podcast-six.png'

const Release = () => {
  return (
    <section className='flex flex-col w-full min-h-[90vh] pl-4 pr-4 mt-10'>
        <h2 className='uppercase text-5xl font-extrabold'> new release <span className=''>out now</span></h2>
        <Swiper
            className='flex flex-row w-full md:h-[60vh] h-[65vh] mt-7'
            modules={[Navigation]}
            spaceBetween={50}
            slidesPerView={3}
            navigation={false}
            breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 25,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 25,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
        >
            <SwiperSlide>
                <ul className='w-full h-full flex flex-col p-2 justify-between border border-black'>
                  <li className='h-[35vh]'>
                    <iframe className="h-full w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0"></iframe>
                  </li>
                  <li className=''>
                    <h3 className='font-extrabold text-lg w-full leading-tight'>{"It is a long established fact that a reader will be distracted by the readable".slice(0, 70) + ".."}</h3>
                  </li>
                  <li className=''>
                    <p className='text-sm leading-tight'>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s".slice(0, 80) + ".."}</p>
                  </li>
                  <li className=' border-t border-[#1c1c1c] pt-2 mt-3'>
                    <ul className='flex items-center justify-between w-full'>
                          <li className='text-md uppercase'>listen now</li>
                          <li className='md:w-[65%] w-[60%]'>
                            <ul className='w-full flex justify-between items-center'>
                                <li className=''>
                                  <Image src={PodcastOne} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastTwo} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastThree} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastFour} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastFive} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastSix} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                            </ul>
                          </li>
                    </ul>
                  </li>
                </ul>
            </SwiperSlide>
            <SwiperSlide>
                <ul className='w-full h-full flex flex-col p-2 justify-between border border-black'>
                  <li className='h-[35vh]'>
                    <iframe className="h-full w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0"></iframe>
                  </li>
                  <li className=''>
                    <h3 className='font-extrabold text-lg w-full leading-tight'>{"It is a long established fact that a reader will be distracted by the readable".slice(0, 70) + ".."}</h3>
                  </li>
                  <li className=''>
                    <p className='text-sm leading-tight'>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s".slice(0, 80) + ".."}</p>
                  </li>
                  <li className=' border-t border-[#1c1c1c] pt-2 mt-3'>
                    <ul className='flex items-center justify-between w-full'>
                          <li className='text-md uppercase'>listen now</li>
                          <li className='md:w-[65%] w-full'>
                            <ul className='w-full flex justify-between items-center'>
                                <li className=''>
                                  <Image src={PodcastOne} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastTwo} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastThree} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastFour} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastFive} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastSix} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                            </ul>
                          </li>
                    </ul>
                  </li>
                </ul>
            </SwiperSlide>
            <SwiperSlide>
                <ul className='w-full h-full flex flex-col p-2 justify-between border border-black'>
                  <li className='h-[35vh]'>
                    <iframe className="h-full w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0"></iframe>
                  </li>
                  <li className=''>
                    <h3 className='font-extrabold text-lg w-full leading-tight'>{"It is a long established fact that a reader will be distracted by the readable".slice(0, 70) + ".."}</h3>
                  </li>
                  <li className=''>
                    <p className='text-sm leading-tight'>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s".slice(0, 80) + ".."}</p>
                  </li>
                  <li className=' border-t border-[#1c1c1c] pt-2 mt-3'>
                    <ul className='flex items-center justify-between w-full'>
                          <li className='text-md uppercase'>listen now</li>
                          <li className='md:w-[65%] w-full'>
                            <ul className='w-full flex justify-between items-center'>
                                <li className=''>
                                  <Image src={PodcastOne} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastTwo} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastThree} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastFour} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastFive} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastSix} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                            </ul>
                          </li>
                    </ul>
                  </li>
                </ul>
            </SwiperSlide>
            <SwiperSlide>
                <ul className='w-full h-full flex flex-col p-2 justify-between border border-black'>
                  <li className='h-[35vh]'>
                    <iframe className="h-full w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0"></iframe>
                  </li>
                  <li className=''>
                    <h3 className='font-extrabold text-lg w-full leading-tight'>{"It is a long established fact that a reader will be distracted by the readable".slice(0, 70) + ".."}</h3>
                  </li>
                  <li className=''>
                    <p className='text-sm leading-tight'>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s".slice(0, 80) + ".."}</p>
                  </li>
                  <li className=' border-t border-[#1c1c1c] pt-2 mt-3'>
                    <ul className='flex items-center justify-between w-full'>
                          <li className='text-md uppercase'>listen now</li>
                          <li className='md:w-[65%] w-full'>
                            <ul className='w-full flex justify-between items-center'>
                                <li className=''>
                                  <Image src={PodcastOne} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastTwo} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastThree} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastFour} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastFive} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastSix} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                            </ul>
                          </li>
                    </ul>
                  </li>
                </ul>
            </SwiperSlide>
            <SwiperSlide>
                <ul className='w-full h-full flex flex-col p-2 justify-between border border-black'>
                  <li className='h-[35vh]'>
                    <iframe className="h-full w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0"></iframe>
                  </li>
                  <li className=''>
                    <h3 className='font-extrabold text-lg w-full leading-tight'>{"It is a long established fact that a reader will be distracted by the readable".slice(0, 70) + ".."}</h3>
                  </li>
                  <li className=''>
                    <p className='text-sm leading-tight'>{"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s".slice(0, 80) + ".."}</p>
                  </li>
                  <li className=' border-t border-[#1c1c1c] pt-2 mt-3'>
                    <ul className='flex items-center justify-between w-full'>
                          <li className='text-md uppercase'>listen now</li>
                          <li className='md:w-[65%] w-full'>
                            <ul className='w-full flex justify-between items-center'>
                                <li className=''>
                                  <Image src={PodcastOne} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastTwo} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastThree} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastFour} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastFive} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                                <li className=''>
                                  <Image src={PodcastSix} alt='podcast' className='w-6 h-6 object-container' />
                                </li>
                            </ul>
                          </li>
                    </ul>
                  </li>
                </ul>
            </SwiperSlide>
        </Swiper>
    </section>
  )
}

export default Release
