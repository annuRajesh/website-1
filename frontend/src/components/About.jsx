import React from 'react'
import features from '../data/about'

const About = () => {
  return (
    <div className='flex flex-col w-full justify-center items-center  mt-32 gap-6 bg-zinc-200 px-3 py-5'>
       <div className="flex flex-col gap-3">
       <h2 className='text-5xl  mt-10 mb-5 '>Empower your nursing career with us</h2>
       <p className=''>We are committed to supporting aspiring nurses in India by providing expert guidance, essential resources, and career-focused mentorship. Our mission is to help students make informed decisions, gain industry-relevant skills, and achieve their professional goals in the healthcare sector.</p>
       </div>
      <div className="flex gap-3 py-3 mt-12 max-md:flex-col">
      {
        features.map((item)=>(
            <div className="flex flex-col gap-4 border-b py-5 m-1">
                <img className='w-10 h-10' src={item.img.url} alt={item.img.alt} />
                <h4 className='text-2xl'>{item.title}</h4>
                <p className=''>{item.description}</p>
            </div>
        ))
       }
      </div>
    </div>
  )
}

export default About