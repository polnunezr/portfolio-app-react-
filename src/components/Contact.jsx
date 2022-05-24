import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#806586] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/dd1c2d9c-6898-4904-a6f2-52fdb98b06d3" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#f0f8ff] border-[#e3b8c6]'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - polnunez@hotmail.es</p>
            </div>
            <input className='bg-[#f0f8ff] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#f0f8ff]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#f0f8ff] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-black hover:border-black px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact