import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CiFlag1 } from "react-icons/ci";
import { MdLocationOn, MdOutlineModeOfTravel } from 'react-icons/md';
import { TiWeatherWindyCloudy } from 'react-icons/ti';
import { FcCurrencyExchange } from 'react-icons/fc';
import { GiNightVision } from 'react-icons/gi';

const Viewdetails = () => {
    const {id} = useParams()
    const [spot, setSpot] = useState(null)
        useEffect(()=>{
            fetch(`https://tourist-server-five.vercel.app/spots/${id}`)
            .then(res => res.json())
            .then(data => setSpot(data))
           },[])

        console.log(spot);
    return (
        <div className='min-h container mx-auto'>
            <div className='lg:grid grid-cols-2 my-8 gap-10 items-center'>
                <div className=''>
                    <img src={spot?.[0].imageUrl || "https://i.ibb.co/vvCKvDd/Image-not-available.png"}
                    className='rounded-t-lg border-2'
                    alt="" />
                    <h1 className='text-center p-2 font-medium text-lg border-success  rounded-b-lg border-b-4 border-l-4 border-r-4'>{spot?.[0].spotName}</h1>
                </div>
                <div className='text-2xl font-semibold space-y-3'>
                    <h1 className='flex  gap-2'> <CiFlag1 className='mt-1' size={23} color='green'/>Country: <span className='text-success'>{spot?.[0].countryName}</span></h1>
                    <h1 className='flex gap-2'> <MdLocationOn className='mt-1' color='orange' size={20} /> {spot?.[0].location}</h1>
                    <h1 className='flex gap-2'> <TiWeatherWindyCloudy  className='mt-1' color='#1B96EE' size={20} />
                    Season: {spot?.[0].season}</h1>
                    <h1 className='flex gap-2'> <MdOutlineModeOfTravel   className='mt-1' color='#1B96EE' size={20} /> 
                    Travel time: {spot?.[0].time}</h1>
                    <h1 className='flex gap-2'> <FcCurrencyExchange    className='mt-1' color='#1B96EE' size={20} /> 
                    Average cost: {spot?.[0].cost}</h1>
                    <h1 className='flex gap-2'> <GiNightVision className='mt-1' color='#1B96EE' size={20} /> 
                    Total visitor per year: {spot?.[0].visitorPerYear}</h1>
                    <h1 className='text-lg'> 
                    <span className='border-b-2 border-primary'>Description:</span> {spot?.[0].textArea}</h1>

                </div>
            </div>
        </div>
    );
};

export default Viewdetails;