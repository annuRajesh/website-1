import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center items-center bg-black text-white py-12 mt-32'>
       

<div className="flex gap-2 flex-col w-1/2 justify-center m-10 items-start">
 <h4 className='text-2xl font-light'>Connect</h4>
 <p>Email: <a href="mailto:">www.example.com</a></p>
 <p>Phone: <a href="tel:">1234567890</a></p>
</div>
<div className="w-1/2  flex flex-col gap-5 m-3">
<h3 className='text-5xl'>Talk to us</h3>
<p className='font-light'>We provide expert guidance and support to aspiring nurses in India, helping them navigate their education and career journey with ease. From application assistance and career counseling to securing financial aid, we ensure you have the resources needed for a successful future in healthcare.</p>
<button className='border-1 px-5 py-1 w-96'>Let's talk</button>
</div>
    </div>
  )
}

export default Footer