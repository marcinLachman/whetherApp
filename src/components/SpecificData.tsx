import React from "react";

import { TbSunset2 } from 'react-icons/tb';
import { WiHumidity } from 'react-icons/wi';
import { WiCloudyWindy } from 'react-icons/wi';
import { BiCloudLightRain } from 'react-icons/bi';

interface IProps {
  sunset: string
  humidity: string
  pressure: string
  windspeed: string
}

const SpecificData: React.FC<IProps> = ({ sunset, humidity, pressure, windspeed }) => {
  return (
    <div className='container mx-auto px-5 mt-10'>
      <div className='grid lg:grid-flow-col justify-center space-y-4 space-x-6'>
        <div></div>

        {/* sunset */}
        <div className='flex items-center space-x-4 bg-gradient-to-t from-green-200 rounded-md p-3'>
          <div className='text-6xl'><TbSunset2 /></div>
          <div>
            <div className='text-2xl'>{sunset.substring(0, 5)}</div>
            <div className='text-1xl'>Sunset</div>
          </div>
        </div>
        {/* Humidity */ }
        <div className='flex items-center space-x-4 bg-gradient-to-t from-green-200 rounded-md p-3'>
          <div className='text-6xl'><WiHumidity /></div>
          <div>
            <div className='text-2xl'>{humidity} %</div>
            <div className='text-1xl'>Humidity</div>
          </div>
        </div>
        {/* Pressure */}
        <div className='flex items-center space-x-4 bg-gradient-to-t from-green-200 rounded-md p-3'>
          <div className='text-6xl'><BiCloudLightRain /></div>
          <div>
            <div className='text-2xl'>{pressure} mb</div>
            <div className='text-1xl'>Pressure</div>
          </div>
        </div>
        {/* speed */}
        <div className='flex items-center space-x-4 bg-gradient-to-t from-green-200 rounded-md p-3'>
          <div className='text-6xl'><WiCloudyWindy /></div>
          <div>
            <div className='text-2xl'>{windspeed} kph</div>
            <div className='text-1xl'>Wind speed</div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  )
}

export default SpecificData;