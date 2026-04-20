import main3 from '../../assets/main3.jpg'
import main2 from '../../assets/main2.jpg'
import main from '../../assets/main.jpg'
import main4 from '../../assets/main4.jpg'
import main5 from '../../assets/main5.jpg'
import { Wifi, Tv, Snowflake } from 'lucide-react'

function RoomBody() {

  const rooms = [
    { img: main3, id: 1, Name: "Single Room", Price: 15000, Space: "2 Guest", Availability: "Available" },
    { img: main, id: 2, Name: "Double Room", Price: 30000, Space: "2 Guest", Availability: "Available" },
    { img: main5, id: 3, Name: "Suite Room", Price: 45000, Space: "2 Guest", Availability: "Booked" },
    { img: main4, id: 4, Name: "Suite Room", Price: 45000, Space: "2 Guest", Availability: "Available" },
    { img: main5, id: 5, Name: "Deluxe Room", Price: 50000, Space: "2 Guest", Availability: "Booked" },
    { img: main2, id: 6, Name: "Single Room", Price: 15000, Space: "2 Guest", Availability: "Booked" },
    { img: main3, id: 7, Name: "Double Room", Price: 30000, Space: "2 Guest", Availability: "Available" },
    { img: main4, id: 8, Name: "Deluxe Room", Price: 45000, Space: "2 Guest", Availability: "Booked" }
  ]

  return (
    <div className="bg-white py-10 px-6 md:px-12">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {rooms.map((room) => (
          <div
            key={room.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300"
          >

            <div className="relative h-[220px]">
              <img
                src={room.img}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-3 left-3 bg-black/70 text-white text-sm px-3 py-1 rounded-md">
                ₦{room.Price.toLocaleString()} / night
              </div>
            </div>

            <div className="p-4">

              <h1 className="text-xl font-serif font-bold text-[rgb(40,30,20)]">
                {room.Name}
              </h1>

              <p className="text-gray-500 text-sm mt-1">
                {room.Space}
              </p>

              <div className="flex gap-4 mt-3 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Wifi size={16} /> Wifi
                </span>

                <span className="flex items-center gap-1">
                  <Tv size={16} /> TV
                </span>

                <span className="flex items-center gap-1">
                  <Snowflake size={16} /> AC
                </span>
              </div>

              <div className="mt-4">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    room.Availability === "Available"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {room.Availability}
                </span>
              </div>

              <button className="mt-4 w-full bg-[rgb(51,42,34)] hover:bg-[rgb(30,22,18)] text-white py-2 rounded-md transition">
                BOOK NOW
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default RoomBody