import React from 'react'

const NotFound = () => {
  return (
    <div>
      <div className="ff gap-[50px] w-full h-[100px] opacity-75 bg-[#90e6ff] ">
      <a className="text-[50px] gap-[50px] ml-[30px] font-extrabold text-[#0061ff]" href="http://localhost:5173">Домой</a>
            <a className="text-[50px] gap-[50px] ml-[100px] font-extrabold text-[#0061ff]" href="http://localhost:5173/clicker">Кликер</a>
            <a className="text-[50px] gap-[50px] ml-[100px] font-extrabold text-[#0061ff]" href="http://localhost:5173/pl">Что-то</a>
            
            </div> 
      <h1 className='flex-col gg font-extrabold text-[#8c4f00] text-center mt-[200px] text-7xl'>Такой страницы не сущевствует!<br/><span className='mt-[70px] text-9xl' >404</span></h1>

    </div>
  )
}

export default NotFound