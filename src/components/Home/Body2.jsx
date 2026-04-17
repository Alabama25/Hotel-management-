import main3 from '../../assets/main3.jpg'
import main4 from '../../assets/main4.jpg'
import { NavLink } from 'react-router'
import './Body2.css'

function Body2(){
  return(
    <>
      <div className='body-div2'>
        <div className='body-div2-sub1'>
          <div className='div2-sub1-extras1'><img className='img2' src={main3}/></div>
          <div className='div2-sub1-extras2'><img className="img3" src={main4}/></div>
        </div>
        <div className='body-div2-sub2'>
          <div className='div2-sub2-extras1'>
            <div className='div2-sub2-ex1-extras1'>
              <p> A1 Lounge Hotel & Suites </p>
            </div>
            <div className='div2-sub2-ex1-extras2'>
              <h1>Luxury hotel in the heart of Ago-iwoye city </h1>
            </div>
            <div className='div2-sub2-ex1-extras3'>
              <p>A1 Lounge Hotel, in the heart of Ago-iwoye city, offer over 60 modern luxurious rooms.
                Enjoy premium facilities, perfect for relaxation and indulgence. Our friendly staff ensures a seamless, personalized experience, with stunning city views. Discover true luxury and hospitality at A1 Lounge.
              </p>
            </div>
          </div>
          <div className='div2-sub2-extras2'>
            <button className='checkroom-btn'><NavLink to= "/Rooms" className="NavLink-Btn">Check rooms &rarr;</NavLink></button>
          </div>
        </div>
      </div>
    </>
  )
}
export default Body2