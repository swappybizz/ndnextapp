import React from 'react'

const header = () => {
  return (
    <>
    <div className='w-[99.9%] fixed min-h-24  border-b-[1px] border-[#FAF9F6] top-0 flex border-opacity-0' >
        
        <div className='flex items-center justify-between w-full px-8' >

            <div className='flex items-center space-x-8 ml-auto' >
                <a href='#' className='bg-[#000000] text-lg text-[#FAF9F6] p-3 font-semibold hover:underline' > App </a>
                <a href='#' className='bg-[#000000] text-lg text-[#FAF9F6] p-3 font-semibold hover:underline' > Products </a>
                <a href='#' className='bg-[#000000] text-lg text-[#FAF9F6] p-3 font-semibold hover:underline' > Pricing </a>
                <a href='#' className='bg-[#FAF9F6] text-lg text-black p-3 font-semibold' > Contact </a>
                
            </div>

        </div>

    </div>
    </>
  )
}

export default header