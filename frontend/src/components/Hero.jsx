import React from 'react'
import { hero_link } from '../data/image_link'

const Hero = () => {
  return (
    <div className='container mx-auto flex gap-3 w-full justify-center items-center max-lg:flex-col mt-20'>
        <div className="w-1/2 max-lg:w-full flex flex-col justify-center items-center">
<h1 className='text-6xl max-lg:text-4xl font-light  text-center  tracking-tight leading-none'> Your Trusted Partner in Nursing Education & Career Growth</h1>
<p className='text-center text-zinc-800 font-light mt-3 max-w-96 '>Join our nursing programs from reputed nursing colleges and gain the knowledge and skills needed to excel in the healthcare industry</p>
<div className="w-full flex gap-4 justify-center items-center mt-6 max-md:flex-col ">
    <button className='border px-10 bg-black text-white  py-1 '><a href="tel:">Call me</a></button>
    <button className='px-10 py-1 border'><a href="mailto:">Email us</a></button>
</div>
        </div>
        <div className="w-1/2 max-lg:w-full flex justify-center items-center mt-10 rounded-4xl overflow-hidden  ">
<img src={hero_link} alt="" className='rounded-3xl shadow-xl w-full object-cover ' style={{width:'100%'}}/>
        </div>
    </div>
  )
}

export default Hero