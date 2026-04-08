import React from 'react'

export default function RightControl({handleSelection}) {
  return (
    <div className="w-[100px] h-[250px] border-4 border-solid rounded-r-4xl bg-red-500 ">

        <div>
          <div className='flex items-center justify-center'>
            <button className='w-[25px] h-[25px] border-2 border-solid rounded-[80px] bg-black text-white'>X</button>
          </div>
          <div className='flex items-center justify-center'>
            <button className='items-center justify-left w-[25px] h-[25px] border-2 border-solid rounded-[80px] bg-black text-white'>Y</button>
            <div className='items-center w-[25px] h-[25px]'></div>
            <button onClick={handleSelection} className='items-center justify-right w-[25px] h-[25px] border-2 border-solid rounded-[80px] bg-black text-white'>A</button>
          </div>

          <div className='flex items-center justify-center'>
            <button className='w-[25px] h-[25px] border-2 border-solid rounded-[80px] bg-black text-white'>B</button>
          </div> 
        </div>

        <div className='flex items-center justify-center'>
          <div className=' w-[50px] h-[50px] border-2 border-solid rounded-[80px] bg-black text-white' />
        </div>
      </div>
  ) 
}
