import React from 'react'
import Nav from '../components/Nav'
import { SiViaplay } from "react-icons/si";
import Logos from '../components/Logos';
import Cardspage from '../components/Cardspage';
import ExploreCourses from '../components/ExploreCourses';
import About from '../components/About';
import ai from '../assets/ai.png'
import ai1 from '../assets/SearchAi.png'
import ReviewPage from '../components/ReviewPage';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate()

  return (



    <div className='w-full overflow-hidden bg-white'>

      <Nav />

      {/* Spacer for fixed nav */}
      <div className="pt-[80px] lg:pt-[100px] pb-[30px] lg:pb-[40px] px-[15px] lg:px-[80px] max-w-[1600px] mx-auto min-h-[auto] lg:min-h-[70vh] flex items-center justify-center">

        {/* Banner Container */}
        <div className="w-full bg-gradient-to-r from-[#184EBA] via-[#3B72E5] to-[#5eb1ff] rounded-[20px] lg:rounded-[30px] flex flex-col lg:flex-row overflow-hidden relative shadow-lg ring-1 ring-gray-100">

          {/* Left Text Content */}
          <div className="lg:w-[55%] w-full bg-transparent p-[30px] md:p-[50px] lg:p-[70px] flex flex-col justify-center z-20 xl:p-[90px]">
            <h1 className="text-white text-[28px] md:text-[40px] lg:text-[56px] font-bold leading-tight mb-4 tracking-tight">
              Start, switch, or advance your career
            </h1>
            <p className="text-white text-[14px] md:text-[18px] lg:text-[20px] mb-6 md:mb-8 font-light max-w-full lg:max-w-[85%]">
              Grow with courses from top organizations and advance your career path today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className='px-[20px] lg:px-[24px] py-[12px] lg:py-[14px] bg-white text-[#184EBA] hover:bg-gray-100 rounded-[8px] text-[15px] lg:text-[16px] font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-sm'
                onClick={() => navigate("/allcourses")}
              >
                Join for Free <SiViaplay className='w-[18px] h-[18px] fill-[#184EBA]' />
              </button>

              <button
                className='px-[20px] lg:px-[24px] py-[12px] lg:py-[14px] bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-[8px] text-[15px] lg:text-[16px] font-bold flex items-center justify-center gap-2 cursor-pointer transition-colors'
                onClick={() => navigate("/searchwithai")}
              >
                Search with AI
                <img src={ai} className='w-[18px] h-[18px] rounded-full hidden lg:block' alt="AI Icon" />
                <img src={ai1} className='w-[18px] h-[18px] rounded-full lg:hidden' alt="AI Icon" />
              </button>
            </div>
          </div>

          {/* Right Image area - Hidden on mobile as it's empty, shown on LG for shapes */}
          <div className="lg:w-[45%] w-full min-h-[0px] lg:min-h-[400px] relative hidden lg:flex flex-col items-center justify-center overflow-visible z-0 bg-transparent">

            {/* Shape 1: Huge Purple/Violet Oval */}
            <div className="absolute top-[0%] right-[0%] w-[120%] h-[140%] rounded-l-full bg-gradient-to-br from-[#9f61f7] to-[#4c1d95] shadow-2xl opacity-90 border-t border-l border-white/20 transform z-0"></div>

            {/* Shape 2: Light Cyan/Blue overlapping Oval */}
            <div className="absolute bottom-[-10%] left-[-15%] w-[110%] h-[120%] bg-gradient-to-tr from-[#60a5fa] to-[#a78bfa] rounded-[40%] shadow-[0_20px_50px_rgba(0,0,0,0.3)] opacity-95 border-t-2 border-r border-white/40 transform rotate-[15deg] z-10"></div>

            <div className="relative z-30 w-full h-full"></div>
          </div>

        </div>
      </div>
      <Logos />
      <ExploreCourses />
      <Cardspage />
      <About />
      <ReviewPage />
      <Footer />




    </div>

  )
}

export default Home
