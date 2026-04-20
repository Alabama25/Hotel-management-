import main2 from '../../assets/main2.jpg'
import NavBar from '../NavBar/NavBar'
import { Star } from 'lucide-react'

function Header() {
  return (
    <>
      <div className="h-[85vh] flex flex-col relative font-sans">

        <img
          src={main2}
          className="h-full w-full object-cover absolute inset-0"
        />

        <div className="absolute inset-0 bg-black/50 z-10"></div>

        <NavBar />

        <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                        flex flex-col items-center text-white w-[80%] md:w-[55%] text-center">

          <div className="flex gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={22}
                className="fill-amber-300 text-amber-300"
              />
            ))}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-wide font-serif mb-3">
            A1Lounge Hotel
          </h1>

          <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-[600px]">
            Located in the heart of the city, this luxurious modern hotel offers
            top-notch amenities for a perfect stay.
          </p>

          <p className="text-base md:text-lg text-gray-200 mb-6">
            Experience comfort, elegance, and world-class hospitality.
          </p>

          <div className="mt-2">
            <button className="px-6 py-3 border border-white rounded-full 
                               font-semibold tracking-wide hover:bg-white hover:text-black
                               transition duration-300">
              EXPLORE →
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Header