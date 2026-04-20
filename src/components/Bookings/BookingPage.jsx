import { NavLink } from 'react-router'
import { Home, BedDoubleIcon, Book, Phone } from 'lucide-react'

function BookingPage() {
  return (
    <div className="flex h-screen bg-[rgb(245,241,236)] font-sans">

      <div className="w-[80px] md:w-[100px] bg-white shadow-md flex flex-col items-center py-6 gap-10">
        <div className="text-lg font-bold">
          <span className="text-amber-600">A1</span>Lounge
        </div>
        <div className="flex flex-col gap-10 mt-10">
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
      <div className="flex-1 bg-white p-6">
        <h1 className="text-2xl font-serif font-bold text-[rgb(40,30,20)]">
          Booking Dashboard
        </h1>
        <p className="text-gray-500 mt-2">
          Manage your rooms, bookings and hotel operations here.
        </p>
      </div>
    </div>
  )
}

export default BookingPage