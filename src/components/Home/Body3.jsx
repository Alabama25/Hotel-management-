import main from '../../assets/main.jpg'

function Body3() {
  return (
    <div className="min-h-[70vh] flex flex-col px-6 py-8 bg-[rgb(245,241,236)]">

      <div className="text-center mb-6">
        <p className="text-[rgb(131,97,71)] text-xs uppercase tracking-wider">
          Exquisite and Luxurious
        </p>

        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[rgb(40,30,20)] mt-1">
          Rooms and suite collection
        </h2>
      </div>

      <div className="flex flex-col md:flex-row md:px-10 w-4/5 ml-28">

        <div className="w-full md:w-1/2 flex flex-col bg-white p-5">

          <p className="text-sm text-gray-500">
            Price: <span className="text-black font-semibold">$50/night</span>
          </p>

          <h1 className="text-2xl md:text-3xl font-serif font-bold text-[rgb(40,30,20)] mt-2">
            Deluxe Room
          </h1>

          <p className="text-gray-600 text-sm mt-2 leading-relaxed">
            Cozy and modern, this room offers essential amenities for a comfortable stay,
            perfect for solo travellers or couples seeking relaxation.
          </p>

          <div className="text-sm text-gray-500 mt-4 space-y-1">
            <p>Room size: 28M²</p>
            <p>Bed: 1 King Bed</p>
            <p>Capacity: 2 Adults, 1 Child</p>
          </div>

          <div className="flex gap-3 mt-5">
            <button className="bg-[rgb(51,42,34)] text-white px-4 py-2 text-sm rounded-md">
              BOOK NOW
            </button>

            <button className="border border-[rgb(92,72,58)] text-[rgb(92,72,58)] px-4 py-2 text-sm rounded-md">
              VIEW ROOM →
            </button>
          </div>

        </div>

        <div className="w-full md:w-1/2 h-[350px] rounded-md overflow-hidden">
          <img
            src={main}
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </div>
  )
}

export default Body3