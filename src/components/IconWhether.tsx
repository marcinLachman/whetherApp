import React from "react";

import clear_day from '../assets/clear-day.svg';
import clear_night from '../assets/clear-night.svg';
import cloudy from '../assets/cloudy.svg';
import fog from '../assets/fog.svg';
import partly_cloudy_day from '../assets/partly-cloudy-day.svg';
import partly_cloudy_night from '../assets/partly-cloudy-night.svg';
import rain from '../assets/rain.svg';
import showers_day from '../assets/showers-day.svg';
import showers_night from '../assets/showers-night.svg';
import snow_showers_day from '../assets/snow-showers-day.svg';
import snow_showers_night from '../assets/snow-showers-night.svg';
import snow from '../assets/snow.svg';
import thunder_rain from '../assets/thunder-rain.svg';
import thunder_showers_day from '../assets/thunder-showers-day.svg';
import thunder_showers_night from '../assets/thunder-showers-night.svg';
import wind from '../assets/wind.svg';
import no_icon from '../assets/no-icon.svg';

interface IProps {
  icon: string
}

const IconWhether: React.FC<IProps> = ({ icon }) => {

  return (
    <div className='flex w-screen justify-center'>
      <div className='mt-10'>
      {
        (() => {
          switch(icon) {                   
            case('clear-day'): {
              return (
                <img src={clear_day} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
            case('clear-night'): {
              return (
                <img src={clear_night} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
            case('snow'): {
              return (
                <img src={snow} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
            case('snow-showers-day'): {
              return (
                <img src={snow_showers_day} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
            case('snow-showers-night'): {
              return (
                <img src={snow_showers_night} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
            case('thunder-rain'): {
              return (
                <img src={thunder_rain} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
            case('thunder-showers-day'): {
              return (
                <img src={thunder_showers_day} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
            case('thunder-showers-night'): {
              return (
                <img src={thunder_showers_night} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
            case('rain'): {
              return (
                <img src={rain} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
            case('showers-day'): {
              return (
                <img src={showers_day} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
            case('showers-night'): {
              return (
                <img src={showers_night} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
            case('fog'): {
              return (
                <img src={fog} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
            case('wind'): {
              return (
                <img src={wind} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
            case('cloudy'): {
              return (
                <img src={cloudy} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
            case('partly-cloudy-day'): {
              return (
                <img src={partly_cloudy_day} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
            case('partly-cloudy-night'): {
              return (
                <img src={partly_cloudy_night} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
                
            default: {
              return (
                <img src={no_icon} alt="whether Icon" width='100' height='100' />
              )
            }
            break;
            }
        })()  
      }
      </div>
    </div>
  )
}

export default IconWhether;