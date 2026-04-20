import main3 from '../../assets/main3.jpg'
import main4 from '../../assets/main4.jpg'
import { NavLink } from 'react-router'

function Body2() {
  return (
    <div className="min-h-[60vh] bg-white flex flex-col md:flex-row justify-center items-center gap-10 px-6 py-10 mt-1">

      <div className="w-full md:w-[40%] flex justify-center items-center gap-4">

        <div className="w-1/2 h-[320px] mt-10 rounded-xl overflow-hidden shadow-md">
          <img src={main3} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
        </div>

        <div className="w-1/2 h-[320px] mb-10 rounded-xl overflow-hidden shadow-md">
          <img src={main4} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
        </div>

      </div>

      <div className="w-full md:w-[40%] flex flex-col">

        <p className="text-[rgb(131,97,71)] font-medium tracking-wide text-sm uppercase mb-2">
          A1 Lounge Hotel & Suites
        </p>

        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[rgb(40,30,20)] leading-tight mb-4">
          Luxury hotel in the heart of Ago-Iwoye city
        </h1>

        <p className="text-[rgb(90,90,110)] text-base leading-relaxed mb-6">
          A1 Lounge Hotel, in the heart of Ago-iwoye city, offers over 60 modern luxurious rooms.
          Enjoy premium facilities perfect for relaxation and indulgence. Our friendly staff ensures
          a seamless, personalized experience, with stunning city views. Discover true luxury and hospitality at A1 Lounge.
        </p>

        <div>
          <button className="px-6 py-3 rounded-full bg-[rgb(83,65,51)] text-white font-semibold
                             hover:bg-[rgb(60,45,35)] active:bg-[rgb(39,29,20)]
                             transition duration-300">
            <NavLink to="/Rooms" className="text-white no-underline">
              Check rooms →
            </NavLink>
          </button>
        </div>

      </div>

    </div>
  )
}

export default Body2