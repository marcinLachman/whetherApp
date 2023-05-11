import React from "react";

interface IProps {
  temp: string
  city: string
  conditions: string
  time: string
  date: string
}

const TempDateTime: React.FC<IProps> = ({ temp, city, conditions, time, date }) => {
  return (
    <div className='flex mt-10'>
      {/* temp */}
      <div className='md:flex bg-black w-full text-white md:justify-end text-center p-5'>
        <div className='text-4xl md:text-6xl font-bold mr-5'>
          {temp}&#8451;
        </div>
        <div className='text-center space-y-2 mr-12'>
          <div className='text-xl md:text-3xl'>{conditions}</div>
          <div className='text-xl'>{city}</div>
        </div>
      </div>
      {/* data */}
      <div className='flex flex-col justify-start bg-gradient-to-t from-green-200 w-full'>
        <div className='ml-7 space-y-2 my-auto'>
          <div className='text-2xl font-bold'>{date.replaceAll('-', '/')}</div>
          <div className='text-2xl font-bold'>{time}</div>
        </div>
      </div>
    </div>
  )
}

export default TempDateTime;