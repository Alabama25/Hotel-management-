import main2 from '../../assets/main2.jpg'
import NavBar from '../NavBar/NavBar'

function RoomHeader() {
  return (
    <div className="relative h-[80vh] w-[90%] mx-auto mt-2 overflow-hidden rounded-xl">

      <img
        src={main2}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-20">
        <NavBar />
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 
                      w-[90%] md:w-[70%] 
                      bg-white/10 backdrop-blur-md 
                      border border-white/20 
                      rounded-2xl px-6 py-4 
                      flex flex-col md:flex-row 
                      items-center justify-between gap-6 text-white">

        <div className="flex flex-col">
          <p className="text-xs tracking-widest text-white/80">CHECK-IN</p>
          <input
            type="date"
            className="mt-1 bg-transparent border-b border-white/40 
                       outline-none text-white placeholder-white/70"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-xs tracking-widest text-white/80">CHECK-OUT</p>
          <input
            type="date"
            className="mt-1 bg-transparent border-b border-white/40 
                       outline-none text-white"
          />
        </div>


        <button className="px-6 py-2 bg-[rgb(51,42,34)] hover:bg-[rgb(30,22,18)] 
                           text-white font-semibold rounded-lg transition">
          Search
        </button>

      </div>

    </div>
  )
}

export default RoomHeader