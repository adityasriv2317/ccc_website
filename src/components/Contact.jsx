import React from 'react'

const Contact = () => {
  return (
    <>
     
      <div className='text-white mt-32 flex justify-center items-center flex-col bg-red-400 w-4/12 h-auto py-5 rounded-md '>
      <h1 className='text-4xl text-start block'>Let's connect Networks</h1>
        <form action="">
        <div>
          <input type="text" className='border-white border-2 rounded-md font-bolder px-3 text-white py-2 mt-4 bg-gray-900' placeholder='First Name' /> <input className='border-white border-2 rounded-md font-bolder px-3 text-white py-2 bg-gray-900 mt-4' type="text" placeholder='Last Name'/>
        </div>
        <div>
        <input type="text" className='border-white border-2 rounded-md font-bolder px-3 text-white py-2 bg-gray-900 w-full mt-1'placeholder='Email' />
        </div>
        <div>
        <input type="text" className='border-white border-2 rounded-md font-bolder px-3 text-white py-2 bg-gray-900 w-full mt-1' placeholder='Phone Number'/>
        </div>
        <input type="area" className='border-white border-2 rounded-md font-bolder px-3 text-white py-10 bg-gray-900 w-full mt-1' placeholder='Message' />
         
         <div className='flex justify-center items-center'>
        <button className='h-10 w-96 rounded-md bg-gradient-to-r from-violet-700 to-pink-600 mt-3 text-center'>Submit</button>
        </div>
        </form>
      </div>
    </>
  )
}

export default Contact
