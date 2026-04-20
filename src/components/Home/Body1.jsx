import { MapPinnedIcon, Bath, Users, Tag } from 'lucide-react'

function Body1() {
  return (
    <div className="min-h-[40vh] bg-white flex flex-wrap justify-center gap-6 p-6">

      <div className="w-[250px] bg-white shadow-sm hover:shadow-lg transition duration-300 rounded-xl flex flex-col items-center text-center p-6">
        <MapPinnedIcon className="h-10 w-10 text-blue-600 mb-4" />

        <h2 className="text-[20px] font-bold text-[rgb(49,27,10)] mb-2">
          Located in the heart of Ago Iwoye city
        </h2>

        <p className="text-[rgb(173,149,130)] text-[15px]">
          Ideally located in the city's heart for easy access and convenience
        </p>
      </div>

      <div className="w-[250px] bg-white shadow-sm hover:shadow-lg transition duration-300 rounded-xl flex flex-col items-center text-center p-6">
        <Bath className="h-10 w-10 text-emerald-600 mb-4" />

        <h2 className="text-[20px] font-bold text-[rgb(49,27,10)] mb-2">
          Luxurious, modern, and comfortable
        </h2>

        <p className="text-[rgb(173,149,130)] text-[15px]">
          Experience a luxurious, modern and fully equipped space for comfort
        </p>
      </div>

      <div className="w-[250px] bg-white shadow-sm hover:shadow-lg transition duration-300 rounded-xl flex flex-col items-center text-center p-6">
        <Users className="h-10 w-10 text-orange-500 mb-4" />

        <h2 className="text-[20px] font-bold text-[rgb(49,27,10)] mb-2">
          Friendly and welcoming staff
        </h2>

        <p className="text-[rgb(173,149,130)] text-[15px]">
          Our friendly and welcoming staff ensure a delightful stay every time
        </p>
      </div>

      <div className="w-[250px] bg-white shadow-sm hover:shadow-lg transition duration-300 rounded-xl flex flex-col items-center text-center p-6">
        <Tag className="h-10 w-10 text-red-500 mb-4" />

        <h2 className="text-[20px] font-bold text-[rgb(49,27,10)] mb-2">
          Best prices and great offers
        </h2>

        <p className="text-[rgb(173,149,130)] text-[15px]">
          Enjoy unbeatable prices with fantastic offers tailored just for you
        </p>
      </div>

    </div>
  )
}

export default Body1