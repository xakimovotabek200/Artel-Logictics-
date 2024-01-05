import React from 'react'
import ServiseImage from "../../assets/cns-giftreturn.jpg"
import { services } from '../../constants'

const Servisec = () => {
  return (
    <div className='container mx-auto'>
      <div className='text-center'>
        <h1 className='text-3xl text-[#333366] my-10 font-medium'>Featured USPS® Products & Services</h1>
      </div>
      {Array.isArray(services) && services.map((item, i) => {
        return (
          <div key={i} className='service-flex-reverse flex flex-wrap items-start justify-center relative'>
            <div className='service-wrapper-div relative -right-12 top-16'>
              <div className='bg-[#337AB7]  px-44 py-10  -skew-x-12 '>
                <h1 className='text-4xl font-semibold text-white skew-x-12'>{item.title}</h1>
              </div>
              <div className='mx-20 mt-4'>
                <p className='text-[#333366] font-semibold w-fit' >{item.des}</p>
              </div>
            </div>
            <div>
              <img src={ServiseImage} alt="image of servises" />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Servisec