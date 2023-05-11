import { useEffect, useState } from 'react';
import axios from 'axios';

import IconWhether from './components/IconWhether';
import TempDateTime from './components/TempDateTime';
import SpecificData from './components/SpecificData';

interface whetherData {
  date: string,
  time: string,
  temp: string,
  conditions: string,
  city: string,
  sunset: string,
  humidity: string,
  pressure: string,
  windspeed: string,
  icon: string
}

const App = () => {
  const [inputCity, setInputCity] = useState<string>('Kraków');
  const [whetherData, setWhetherData] = useState<whetherData>({
    date: '',
    time: '',
    temp: '',
    conditions: '',
    city: '',
    sunset: '',
    humidity: '',
    pressure: '',
    windspeed: '',
    icon: ''
  });

  useEffect(() => {
    const fetchWhether = async () => {
      try {
        const response = await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${inputCity}?unitGroup=metric&include=current&key=NTX3959GA8GNUAYB98VKNBNSK&contentType=json`);
        setWhetherData({
          date: response.data.days[0].datetime,
          time: response.data.currentConditions.datetime,
          temp: response.data.currentConditions.temp,
          conditions: response.data.currentConditions.conditions,
          city: response.data.resolvedAddress,
          sunset: response.data.currentConditions.sunset,
          humidity: response.data.currentConditions.humidity,
          pressure: response.data.currentConditions.pressure,
          windspeed: response.data.currentConditions.windspeed,
          icon: response.data.currentConditions.icon
        })
      } catch (error) {
        console.log(`Something wrong witch fetch ${error}`)
      }
    }
    fetchWhether();
  }, [inputCity]);

  return (
    <main className="font-poppins bg-gradient-to-t from-cyan-200 h-full md:h-screen">
      
      {/* input city */}
      <div className='flex w-screen justify-center'>
        <input 
          className='mt-10 border-b-4 border-black rounded-md bg-gray-100 px-4 py-2 md:w-1/4 shadow-md hover:none focus:outline-none' type='text' placeholder='Input City' 
          value={inputCity}
          onChange={(event) => setInputCity(event.target.value)}
        />
      </div>
      {/* icon Whether */}
        <IconWhether icon={whetherData.icon} />

      {/* temp/date/time */}
        <TempDateTime temp={whetherData.temp} city={whetherData.city} conditions={whetherData.conditions} date={whetherData.date} time={whetherData.time} />

      {/* specific data */}
        <SpecificData sunset={whetherData.sunset} humidity={whetherData.humidity} pressure={whetherData.pressure} windspeed={whetherData.windspeed} />
    </main>
  )
}

export default App;
