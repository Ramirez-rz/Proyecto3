import React from 'react'

export default function LeftControl() {
  return (
    <div className="w-[100px] h-[200px] border-4 border-solid rounded-[10px]">
      LeftControl
      <div className='flex items-center justify-center'>
        <button className='w-[25px] h-[25px] border-2 border-solid rounded-[80px]'>^</button>
      </div>
      <div className='flex items-center justify-center'>
        <button className='items-center justify-left w-[25px] h-[25px] border-2 border-solid rounded-[80px]'>{"<"}</button>
        <div className='items-center justify-right w-[25px] h-[25px]'></div>
        <button className='items-center justify-right w-[25px] h-[25px] border-2 border-solid rounded-[80px]'>{">"}</button>
      </div>

      <div className='flex items-center justify-center'>
        <button className='w-[25px] h-[25px] border-2 border-solid rounded-[80px]'>v</button>
      </div>
       
    </div>
  )
}
    