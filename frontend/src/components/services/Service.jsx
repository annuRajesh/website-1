import React from 'react'
import services from '../../data/services'

const Service = () => {
  return (
    <div className='mt-32 container mx-auto'>
        <h2 className='text-6xl text-center mb-10'>Services</h2>
        <div className=" flex gap-4 max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-7">
            {
                services.map((item)=>(
                    <div className="flex flex-col gap-2 w-1/3 max-md:w-full justify-center items-center overflow-hidden">
                        <div className="overflow-hidden w-full">
                        <img src={item.img.url} alt={item.img.alt} className='h-96 object-cover max-md:w-full hover:scale-105 duration-300' />

                        </div>
                        <h3 className='text-2xl font-light'>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Service