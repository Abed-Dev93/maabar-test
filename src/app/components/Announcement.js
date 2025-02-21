import React from 'react'

const Announcement = () => {
  return (
    <section className='w-full flex flex-col md:flex-row md:justify-between gap-8 pr-4 pl-4 mt-14 relative'>
      <iframe className="md:w-[70%] h-[60vh] w-full" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
      <article className='md:absolute md:w-[25%] md:right-0 md:top-[30%] w-full flex flex-col gap-1'>
        <h2 className='capitalize font-extrabold text-2xl'>announcement title</h2>
        <p className='text-md'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
        </p>
      </article>
    </section>
  )
}

export default Announcement
