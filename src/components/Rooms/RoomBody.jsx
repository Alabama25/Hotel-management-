import './RoomBody.css'
import main3 from '../../assets/main3.jpg'
import main2 from '../../assets/main2.jpg'
import main from '../../assets/main.jpg'
import main4 from '../../assets/main4.jpg'
import main5 from '../../assets/main5.jpg'

function RoomBody(){

  const rooms = [
    { img: (<img src={main3} className='img1'/>),
      id: 1,
      Name: "Single Room",
      Price: 120.00,
      Space: "2 Guest",
      icons: "Icon",
      Availability: "Available"
    },
    {
      img: (<img src={main} className='img1'/>),
      id: 2,
      Name: "Double Room",
      Price: 240.00,
      Space: "2 Guest",
      icons: "Icon",
      Availability: "Available"
    },
    {
      img: (<img src={main5} className='img1'/>),
      id: 3,
      Name: "Suite Room",
      Price: 300.00,
      Space: "2 Guest",
      icons: "Icon",
      Availability: "Booked"
    },
    {
      img: (<img src={main4} className='img1'/>),
      id: 4,
      Name: "Suite Room",
      Price: 300.00,
      Space: "2 Guest",
      icons: "Icon",
      Availability: "Available"
    },
    { img: (<img src={main5} className='img1'/>),
      id: 5,
      Name: "Deluxe Room",
      Price: 350.00,
      Space: "2 Guest",
      icons: "Icon",
      Availability: "Booked"
    },
    {
      img: (<img src={main2} className='img1'/>),
      id: 6,
      Name: "Single Room",
      Price: 120.00,
      Space: "2 Guest",
      icons: "Icon",
      Availability: "Booked"
    },
    {
      img: (<img src={main3} className='img1'/>),
      id: 7,
      Name: "Double Room",
      Price: 240.00,
      Space: "2 Guest",
      icons: "Icon",
      Availability: "Available"
    },
    {
      img: (<img src={main4} className='img1'/>),
      id: 8,
      Name: "Deluxe Room",
      Price: 350.00,
      Space: "2 Guest",
      icons: "Icon",
      Availability: "Booked"
    }
  ]
    
  return(
    <>
    <div className='Room-body'>
        {rooms.map((room)=>{
          return(
            <>
            <div className='rooms' key = {room.id}>
              <div className='rooms-div1'>
                <div className='img-div'>{room.img}</div>
                <div className='price-div'>
                  <p>${room.Price}</p>
                </div>
              </div>

              <div className='rooms-div2'>
                <div className='text-div'><h1>{room.Name}</h1></div>
                <div className='text-div'><p>{room.Space}</p></div>
                <div className='text-div'><p>{room.icons}</p></div>
                <div className='text-div'><div className={room.Availability === "Available" ? "available" : "booked"}></div><p>{room.Availability}</p></div>
                <div className='text-div'><button className='room-button'>BOOK NOW</button></div>
              </div>
            </div>
            </>
          )
        })}

        {/* <div className='rooms-div1'>
          <div className='img-div'><img src={main3} className='img1'/></div>
          <div className='price-div'>
            <p>$120.00</p>
          </div>
        </div>

        <div className='rooms-div2'>
          <div className='text-div'><h1>Single Room</h1></div>
          <div className='text-div'><p>2 Guests</p></div>
          <div className='text-div'><p>icons</p></div>
          <div className='text-div'><div className='availability'></div><p>Available</p></div>
          <div className='text-div'><button className='room-button'>BOOK NOW</button></div>
        </div> */}

      </div>
    </>
  )
}
export default RoomBody