import './BookingPage.css'
import main2 from '../../assets/main2.jpg'
import { NavLink } from 'react-router'

function BookingPage(){
  return(
    <>
    <div className='main-div'>
      <div className='div1'>
        <div className='div1-sub1'><p><span className='Span1'>A1</span>Lounge</p></div>
        <div className='div1-sub2'>
          <div className='div1-sub2-est1'><p>Home</p></div>
          <div className='div1-sub2-est2'><p>Rooms</p></div>
          <div className='div1-sub2-est3'><p>Bookings</p></div>
          <div className='div1-sub2-est4'><p>Contact</p></div>
        </div>
      </div>
      <div className='div2'>
        <div className='div2-sub1'>
          <div className='div2-sub1-ext1'><p>Room View & Details</p></div>
          <div className='div2-sub1-ext2'><p>Room No: 300</p></div>
        </div>
        <div className='div2-sub2'>
            <div className='div2-sub2-exras1'>
              <div className='sub2-extra1-est1'>
                <div className='extras1'><p>size:40sq</p></div>
                <div className='extras2'><p>1st floor</p></div>
              </div>
              <div className='img-div'><img src={main2} className='img'/></div>
            </div>
            <div className='div2-sub2-exras2'>
              <div className='sub2-exras2-est1'><p>Input your details</p></div>
              <div className='sub2-exras2-est2'><p>Name:</p><input type="text" className='input'/></div>
              <div className='sub2-exras2-est3'><p>Phone No:</p><input type="text" className='input'/></div>
              <div className='sub2-exras2-est4'>
                <div>
                  <p>CHECK-IN</p>
                  <p>Date</p>
                </div>
                <div>
                  <p>CHECK-OUT</p>
                  <p>Date</p>
                </div>
              </div>
              <div className='sub2-exras2-est5'><button className='booking-button'>Place Booking</button></div>
            </div>
        </div>
        <div className='div2-sub3'></div>
      </div>
    </div>
    </>
  )
}
export default BookingPage