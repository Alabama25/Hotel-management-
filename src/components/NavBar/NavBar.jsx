import { NavLink } from 'react-router'

function NavBar() {
  return (
    <div className="absolute top-4 left-0 w-full z-20 flex items-center justify-between px-6 md:px-12 py-3 text-white">

      <div className="text-2xl md:text-3xl font-bold tracking-wide">
        <span className="text-amber-500">A1</span>Lounge
      </div>

      <div className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-amber-500 font-semibold"
              : "text-white/80 hover:text-amber-500 transition"
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/Rooms"
          className={({ isActive }) =>
            isActive
              ? "text-amber-500 font-semibold"
              : "text-white/80 hover:text-amber-500 transition"
          }
        >
          ROOM & SUITES
        </NavLink>

        <NavLink
          to="/Bookings"
          className={({ isActive }) =>
            isActive
              ? "text-amber-500 font-semibold"
              : "text-white/80 hover:text-amber-500 transition"
          }
        >
          BOOKINGS
        </NavLink>

        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive
              ? "text-amber-500 font-semibold"
              : "text-white/80 hover:text-amber-500 transition"
          }
        >
          CONTACT
        </NavLink>

      </div>
      
      <button className="px-5 py-2 text-sm font-semibold rounded-md
                         bg-amber-600/70 hover:bg-amber-600
                         transition duration-300">
        RESERVATION
      </button>

    </div>
  )
}

export default NavBar