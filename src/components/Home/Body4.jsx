import {
  Wifi,
  ParkingSquare,
  UtensilsCrossed,
  Spade,
  Dumbbell,
  Waves
} from "lucide-react"

function Body4() {
  return (
    <>
      <div className="h-[55vh] bg-white m-[2px] flex flex-col px-[50px]">

        <div className="flex justify-center items-center mt-[50px] h-[7%] text-[rgb(173,149,130)]">
          <p>MODERN AND COMFORTABLE</p>
        </div>

        <div className="flex justify-center items-center text-[35px] h-[10%] mb-[20px]">
          <p>Facilities and amenities</p>
        </div>

        <div className="flex justify-center items-center">

          <div className="flex w-[30%] gap-4 m-[10px] items-start">
            <Wifi size={30} />
            <div className="flex flex-col">
              <p className="font-bold text-[18px]">High Speed Wifi</p>
              <p className="text-[rgb(173,149,130)]">
                Enjoy seamless, high-speed internet access throughout the hotel
              </p>
            </div>
          </div>

          <div className="flex w-[30%] gap-4 m-[10px] items-start">
            <ParkingSquare size={30} />
            <div className="flex flex-col">
              <p className="font-bold text-[18px]">Parking Space</p>
              <p className="text-[rgb(173,149,130)]">
                Ample and secure parking space provided for all hotel guest
              </p>
            </div>
          </div>

          <div className="flex w-[30%] gap-4 m-[10px] items-start">
            <UtensilsCrossed size={30} />
            <div className="flex flex-col">
              <p className="font-bold text-[18px]">Restaurant & Bar</p>
              <p className="text-[rgb(173,149,130)]">
                Savour gourmet dishes and cocktail at our elegant restaurant and bar
              </p>
            </div>
          </div>

        </div>

        <div className="flex justify-center items-center">

          <div className="flex w-[30%] gap-4 m-[10px] items-start">
            <Spade size={30} />
            <div className="flex flex-col">
              <p className="font-bold text-[18px]">Spa Center</p>
              <p className="text-[rgb(173,149,130)]">
                Indulge in a variety of relaxing and rejuvenating treatment at our spa
              </p>
            </div>
          </div>

          <div className="flex w-[30%] gap-4 m-[10px] items-start">
            <Dumbbell size={30} />
            <div className="flex flex-col">
              <p className="font-bold text-[18px]">Fitness Center</p>
              <p className="text-[rgb(173,149,130)]">
                Stay active with state-of-the-art fitness equipment in our modern gym
              </p>
            </div>
          </div>

          <div className="flex w-[30%] gap-4 m-[10px] items-start">
            <Waves size={30} />
            <div className="flex flex-col">
              <p className="font-bold text-[18px]">Swimming Pool</p>
              <p className="text-[rgb(173,149,130)]">
                Refresh and unwind in our pristine outdoor swimming pool
              </p>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Body4