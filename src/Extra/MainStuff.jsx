import React from 'react'
import MusicIcon from "../../images/icon-music.svg"
import Hero from "../../images/illustration-hero.svg"

const MainStuff = () => {

  return (
    <main className='flex flex-col w-[80%] mx-auto  bg-white h-[90vh] rounded-xl mt-2 sm:w-[30%] sm:mt-3 ' >
        <img src={Hero} className='rounded-t-lg w-screen h-[140px] sm:h-[170px] ' />
        <div className="text-center mx-auto max-w-[80%] mt-[50px] ">
          <strong className='text-2xl text-center ' >Order Summary</strong><br/>
          <p className='text-neutral-700 text-center mt-3 mb-6 ' >
            You can now listen to millions of songs, audiobooks, and podcasts on any 
            device anywhere you like!
          </p>
          <div className="flex justify-between  bg-[#eaf7fce1] rounded-lg w-[70vw] sm:w-[25vw] my-2 p-2 ">
            <img src={MusicIcon} className='w-9 my-auto h-9' />
            <div>
              <h2 className="text-xl" >Annual Plan</h2>
              <span className='text-neutral-700' > $59.99/year</span>
            </div>
            <span className='underline text-blue-800 hover:cursor-pointer my-auto' >Change</span> 
          </div>
         <button className='m-2 bg-[#5154e7] hover:bg-[#6163cec4] rounded-lg w-[80%] h-[16%] text-[#e4e2e2] ' >Proceed to Payment</button><br/>
         <button className=' bg-[#f7fcff] hover:bg-[#ebf0f3] text-neutral-700 w-[80%] h-[16%] rounded-lg ' > Cancel Order</button>
      </div>
    </main>
  )
}
export default MainStuff
