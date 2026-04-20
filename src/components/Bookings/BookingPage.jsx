import { NavLink } from 'react-router'
import { Home, BedDoubleIcon, Book, Phone, Wifi, AirVent, Tv, Refrigerator, Bell, Bath } from 'lucide-react'
import main3 from '../../assets/main3.jpg'

function BookingPage() {
  return (
    <div className="flex h-screen bg-[rgb(119,117,114)] font-sans gap-0.5">

      <div className="w-[80px] md:w-[100px] bg-white shadow-md flex flex-col items-center py-2 gap-2">
        <div className="text-lg font-bold">
          <span className="text-amber-600">A1</span>Lounge
        </div>
        <div className="flex flex-col gap-12 mt-10">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex justify-center items-center p-2 rounded-lg transition ${
                isActive ? "text-amber-600 bg-amber-100" : "text-gray-500 hover:text-amber-600"
              }`
            }
          >
            <Home />
          </NavLink>
          <NavLink
            to="/Rooms"
            className={({ isActive }) =>
              `flex justify-center items-center p-2 rounded-lg transition ${
                isActive ? "text-amber-600 bg-amber-100" : "text-gray-500 hover:text-amber-600"
              }`
            }
          >
            <BedDoubleIcon />
          </NavLink>
          <NavLink
            to="/Bookings"
            className={({ isActive }) =>
              `flex justify-center items-center p-2 rounded-lg transition ${
                isActive ? "text-amber-600 bg-amber-100" : "text-gray-500 hover:text-amber-600"
              }`
            }
          >
            <Book />
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              `flex justify-center items-center p-2 rounded-lg transition ${
                isActive ? "text-amber-600 bg-amber-100" : "text-gray-500 hover:text-amber-600"
              }`
            }
          >
            <Phone />
          </NavLink>
        </div>
      </div>
      <div className="flex flex-col bg-[rgb(151,149,147)] h-screen w-full gap-0.5">
        <div className='h-[5%] bg-white flex justify-between items-start pl- mt-0.5'>
          <p className='text-2xl font-bold'>Room details</p>
          <p className='font-bold'>Room No: 300</p>
        </div>
        <div className='flex gap-1 h-[95%]'>
          <div className='w-[75%] h-full flex flex-col gap-0.5'>
            <div className='h-[50%] w-full flex gap-2 bg-white p-2 justify-center items-center'>
              <div className='flex flex-col h-[99%] w-[40%] gap-1 rounded-2xl ml-1.5'>
                <img src={main3} className='h-1/2 w-full object-cover rounded-md'/>
                <img src={main3} className='h-1/2 w-full object-cover rounded-md'/>
              </div>
              <img src={main3} className='h-full w-[60%] object-cover rounded-md'/>
            </div>
            <div className='h-[50%] w-full bg-white p-4 rounded-md shadow-sm flex flex-col justify-between'>
              {/* Room Title */}
              <div>
                <h2 className='text-2xl font-bold text-gray-800'>Deluxe Room</h2>
                <p className='text-gray-600 text-sm mt-1'>
                  Experience comfort and elegance in our deluxe room featuring a king-sized bed,
                  modern interior, air conditioning, and a beautiful city view. Perfect for both
                  business and leisure stays.
                </p>
              </div>

              {/* Room Features */}
              <div className='flex gap-4 text-sm text-gray-700 mt-2'>
                <span>👥 2 Guests</span>
                <span>🛏 1 King Bed</span>
                <span>📐 30m²</span>
              </div>

              {/* Amenities */}
              <div className='mt-2 flex justify-between h-[47%] items-center'>
                <div className='w-1/2 h-full'>
                  <h3 className='font-semibold text-gray-800 mb-1'>Amenities</h3>
                  <ul className='grid grid-cols-2 gap-2 text-sm text-gray-600'>
                  
                  <li className='flex items-center gap-2'>
                    <Wifi size={16} /> Free WiFi
                  </li>

                  <li className='flex items-center gap-2'>
                    <AirVent size={16} /> Air Conditioning
                  </li>

                  <li className='flex items-center gap-2'>
                    <Tv size={16} /> Smart TV
                  </li>

                  <li className='flex items-center gap-2'>
                    <Refrigerator size={16} /> Mini Bar
                  </li>

                  <li className='flex items-center gap-2'>
                    <Bell size={16} /> 24/7 Room Service
                  </li>

                  <li className='flex items-center gap-2'>
                    <Bath size={16} /> Bathroom Essentials
                  </li>

                </ul>
                </div>
                <div className='w-[30%] h-full'>  
                  <div className='w-full h-full rounded-md overflow-hidden'>
                    <iframe
                      src="https://www.google.com/maps?q=A1+Lounge+Ago+Iwoye&output=embed"
                      className="w-full h-full border-0"
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
              {/* Price + Rating */}
              <div className='flex justify-between items-center mt-2'>
                <div>
                  <p className='text-lg font-bold text-amber-600'>₦45,000 / night</p>
                  <p className='text-green-600 text-xs'>Available</p>
                </div>
                <p className='text-sm text-gray-500'>⭐ 4.5 (120 reviews)</p>
              </div>
            </div>
          </div>
          <div className='w-[25%] h-full bg-white p-1.5'>
            <div className='flex h-full flex-col border p-2 gap-2 rounded-2xl'>
              <p className='font-bold text-3xl mb-2.5'>Input Details</p>
              <div className='flex flex-col'>
                <p className='font-bold'>Name*</p>
                <input type="text" className=' bg-[#fdfdfdf1] h-[30px] rounded p-2 border '/>
              </div>
              <div className='flex flex-col'>
                <p className='font-bold'>Phone Number*</p>
                <input type="text" className=' bg-[#fdfdfdf1] h-[30px] rounded p-2 border '/>
              </div>
              <div className='flex flex-col'>
                <p className='font-bold'>Check-In</p>
                <textarea className=' bg-[#fdfdfdf1] h-[30px] rounded p-2 border w-1/2'></textarea>
              </div>
              <div className='flex flex-col'>
                <p className='font-bold'>Check-Out</p>
                <textarea className=' bg-[#fdfdfdf1] h-[30px] rounded p-2 border w-1/2 '></textarea>
              </div>
              <div className='flex flex-col'>
                <p className='font-bold'>Number of Rooms</p>
                <input type="number" max={10} min={1} className=' bg-[#fdfdfdf1] h-[30px] rounded p-2 border w-1/2'/>
              </div>
              <div className='h-[25%] w-full'>
                <p className='font-bold'>Payment*</p>
                <div className='h-full w-full border rounded-2xl'></div>
              </div>
              <div className='w-1/2 h-[7%] mt-1.5 '><button className='bg-[rgb(51,42,34)] text-white h-full w-full rounded-2xl mt-4'>Book Now</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingPage