import React, { useCallback, useState } from 'react'
import data from '../../data/data'
import { useEffect } from 'react'
const box = ( {books ,query , querys , subdetail}) => {
   //const propertiesToCheck = ['place', 'shirt', 'pant', 'tshirt', 'shot'];
  const [filteredData ,setfiltered]=useState([])
 useEffect (()=>{
  const filteredData = data.filter((item) => {
    // Example filter: check if the `item.querys` contains the `querys` prop value
    //item.querys &&


    if(query ) {return item.place.includes(querys) ||
      item.shirt.includes(querys) ||
      item.pant.includes(querys) ||
      item.tshirt.includes(querys) ||
      item.shot.includes(querys)}
   // return  item.place.includes('Chicago');

    

// const newFilteredData = data.filter((item) =>
//   propertiesToCheck.some((property) => item[property]?.includes(querys))
//);

  });
  setfiltered(filteredData)
  console.log(filteredData)
  console.log(querys)
  console.log(query)
  console.log(data)
  console.log(data)

 },[querys])
  return (
    <div  className='' >

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {!filteredData.length > 0 && 
    data.map((item) => (
      <div 
        key={item.id} 
        className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
      >
        <div className="relative">
          {/* Place (Left top) */}
          <h3 className="absolute top-4 left-4 text-xl font-semibold text-gray-800">{item.place}</h3>
          
          {/* Shop Name (Right top) */}
          <p className="absolute top-4 right-4 text-sm text-gray-600">{item.shopname}</p>
        </div>
        
        <img 
          src={item.url} 
         // alt={item.place} 
          className="w-full h-56 object-cover"
        />
        
        <div className="p-6">
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-gray-700"><strong>Shirt:</strong> {item.shirt}</p>
            <p className="text-sm font-medium text-gray-700"><strong>Pant:</strong> {item.pant}</p>
            <p className="text-sm font-medium text-gray-700"><strong>T-shirt:</strong> {item.tshirt}</p>
            <p className="text-sm font-medium text-gray-700"><strong>Jacket:</strong> {item.shot}</p>
          </div>
        </div>
      </div>
    ))
  }
</div>


    <br /> <br /> <br /> <br />


    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {filteredData.length > 0 && 
    filteredData.map((item) => (
      <div 
        key={item.id} 
        className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
      >
        {/* Card Header: Place and Shop Name */}
        <div className="relative">
          {/* Place (Left top) */}
          <h3 className="absolute top-4 left-4 text-xl font-semibold text-gray-800">{item.place}</h3>
          
          {/* Shop Name (Right top) */}
          <p className="absolute top-4 right-4 text-sm font-medium text-gray-600">{item.shopname}</p>
        </div>
        
        {/* Image Section */}
        <img 
          src={item.url} 
         // alt={item.place} 
          className="w-full h-56 object-cover"
        />
        
        {/* Card Content */}
        <div className="p-6">
          <div className="mt-4 space-y-2">
            <p className="text-sm font-medium text-gray-700"><strong>Shirt:</strong> {item.shirt}</p>
            <p className="text-sm font-medium text-gray-700"><strong>Pant:</strong> {item.pant}</p>
            <p className="text-sm font-medium text-gray-700"><strong>T-shirt:</strong> {item.tshirt}</p>
            <p className="text-sm font-medium text-gray-700"><strong>Jacket:</strong> {item.shot}</p>
          </div>
        </div>
      </div>
    ))
  }
</div>

    </div>
  )
}

export default box
