import React from 'react'

const ServiceCard = ({title,description,img}) => {
  return (
    <div>
        <div className="">
            <img src={img.url} alt={img.alt} />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default ServiceCard