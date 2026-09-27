import React from 'react'

export default function Header() {
  return (
    <div className="relative w-full md:h-50 shadow-2xl shadow-blue-200 rounded-b-4xl overflow-hidden ">
      <video autoPlay loop muted playsInline className=" w-full md:h-50 h-35 object-cover z-index-1 rounded-b-4xl">
        <source src="bg-beatwave.mp4" type="video/mp4" />
        Il tuo browser non supporta i video.
      </video>
      <div className='absolute top-1/15 md:left-50 '>
        <h1 className='text-6xl md:text-9xl font-bold text-black'>BeatWave</h1>
        <h2 className='text-gray-200'>Cerca e ascolta l'anteprima delle tue canzoni preferite</h2>
      </div>
    </div>
  )
}
