import React from 'react'

export default function RightControl() {
  return (
    <div className="w-[100px] h-[200px] border-4 border-solid rounded-[10px]">
      RightControl
        <div className='flex items-center justify-center'>
          <button className='w-[25px] h-[25px] border-2 border-solid rounded-[80px]'>X</button>
        </div>
        <div className='flex items-center justify-center'>
          <button className='items-center justify-left w-[25px] h-[25px] border-2 border-solid rounded-[80px]'>Y</button>
          <div className='items-center justify-right w-[25px] h-[25px]'></div>
          <button className='items-center justify-right w-[25px] h-[25px] border-2 border-solid rounded-[80px]'>A</button>
        </div>

        <div className='flex items-center justify-center'>
          <button className='w-[25px] h-[25px] border-2 border-solid rounded-[80px]'>B</button>
        </div>      
    </div>
  ) 
}
