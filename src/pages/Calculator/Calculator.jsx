import React from 'react'

const Calculator = () => {
  return (
    <div className='container mx-auto md:w-10/12'>
      <div className='my-5'>
        <h1 className='text-4xl text-secondary font-semibold uppercase'>HOW MUCH IS A TRUCK DRIVER’S SALARY AT Artel Logistics?</h1>
        <p className='text-text'>So, How much do truck drivers make at Brite? To answer that question we have provided a simple, truck driver salary calculator below. You can use this driver salary calculator to figure out how much you would make driving for Brite under certain criteria. Give it a try!</p>
      </div>
      <div className='grid md:grid-cols-2 gap-20'>
        <div className='rounded-md  bg-[#EFF4F4] p-10'>
          <div>
            <h1 className='text-2xl font-semibold'>TRUCK DRIVER SALARY CALCULATOR</h1>
          </div>
          <div>
            <label for="countries" class="block mb-2 text-2xl font-medium text-gray-900">Ortl position</label>
            <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block outline-none border-none w-full p-3 ">
              <option selected>~Choose a value~</option>
              <option value="">Solo W-2</option>
              <option value="">Solo 1099</option>
              <option value="">Team W-2</option>
              <option value="">Team 1099</option>
            </select>
          </div>
          <div>
            <p>Safety and Performance Bonuses</p>
            <div className='mt-5'>
              <input type="checkbox" className='accent-green-500 scale-150 ' />
              <span className='text-sm ml-2'>Drive safe (did NOT get any tickets, violations, or accidents, and <br /> had Safety Score 90 or higher)*</span>
            </div>
            <div className='mt-5'>
              <input type="checkbox" className='accent-green-500 scale-150 ' />
              <span className='text-sm ml-2'>A driver is with Brite for over 6 months</span>
            </div><br />
          </div>
          <div>
            <label htmlFor="" className='text-sm'>Miles per week</label> <br /> <br />
            <input className='w-full p-3 outline-green-600 border-none' type="number" defaultValue={2500} name="" id="" />
          </div>
        </div>
        <div className='bg-[#EFF4F4] p-10 rounded-md'>
          <div>
            <div>
              <h1 className='text-3xl font-semibold'>TOTAL SUMMARY</h1>
            </div>
            <div className='flex items-center justify-between mt-5'>
              <p className='text-sm'>ORT position</p>
              <p>0.45</p>
            </div>
            <div className='flex items-center justify-between mt-5'>
              <p className='text-sm'>Safety and Performance Bonuses</p>
              <p>0</p>
            </div>
            <div className='flex items-center justify-between mt-5'>
              <p className='text-sm'>Miles per week</p>
              <p>2500</p>
            </div>
            <hr className='my-5' />
            <div className='flex items-center justify-between mt-5'>
              <p className='text-xl font-semibold'>Your salary per week</p>
              <p className='text-xl font-semibold'>$ 1,477.36</p>
            </div>
            <hr className='my-5' />
            <div className='flex items-center justify-between mt-5'>
              <p className='text-xl font-semibold'>Total salary</p>
              <p className='text-xl font-semibold'>$ 1,477.36</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calculator;