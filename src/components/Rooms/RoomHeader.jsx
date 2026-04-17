import './RoomHeader.css'
import main2 from '../../assets/main2.jpg'
import NavBar from '../NavBar/NavBar'
function RoomHeader(){
  return(
    <>
    <div className='header-container'>
      <NavBar />
      <div className="img-div"><img src={main2} className='img1'/></div>
      <div className="check-div">
        <div className="checkin-div">
          <p>CHECK-IN</p>
          <input type="date" className='input1'/>
        </div>
        <div className="checkout-div">
          <p>CHECK-OUT</p>
          <input type="date" className='input2'/>
        </div>
        <div className='button-div2'>
          <button className='check-button'>Search</button>
        </div>
      </div>
    </div>
    </>
  )
}
export default RoomHeader