import './NavBar.css'
import { NavLink } from 'react-router'

function NavBar(){
  return(
    <>
      <div className='nav-div'>
            <div>
              <p className='hotel-name1'><span className='span1'>A1</span>Lounge</p>
            </div>
            <div className='navlink-div'>
              <p><NavLink to="/" className={({isActive})=>isActive? "Active" : "Not-Active"}>HOME</NavLink></p>
              <p><NavLink to="/Rooms" className={({isActive})=>isActive? "Active" : "Not-Active"}>ROOM & SUITES</NavLink></p>
              <p><NavLink to="/Bookings" className={({isActive})=>isActive? "Active" : "Not-Active"}>BOOKINGS</NavLink></p>
              <p><NavLink to="/Contact" className={({isActive})=>isActive? "Active" : "Not-Active"}>CONTACT</NavLink></p>
            </div>
            <div className='button-div'>
              <button className='button1'>RESERVATION</button>
            </div>
        </div>
    </>
  )
}
export default NavBar