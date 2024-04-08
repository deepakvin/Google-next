'use client'
import {useState,useEffect} from 'react'

export default function CountryLookup() {
    const [country,setCountry]=useState('india');
    useEffect(()=>{

        const getCountry=async ()=>{
            const response=await fetch('http://extreme-ip-lookup.com/json')
            .then((res)=>res.json())
            .then((data)=>data.country);
            if(!response)return;
            setCountry(response);

        }
        getCountry();

    },[])
  return (
    <div>
      {country}
    </div>
  )
}
