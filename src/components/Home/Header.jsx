import main2 from '../../assets/main2.jpg'
import NavBar from '../NavBar/NavBar'
import './Header.css'
import { Star} from 'lucide-react'

function Header(){
  return(
    <>
      <div className='header-div'>
        <NavBar />
        <div className='page-div'>
        <div className='star-div'><Star className='star'/><Star className='star'/><Star className='star'/><Star className='star'/><Star className='star'/></div>
        <div className='hotel-name2'><h1>A1Lounge Hotel</h1></div>
        <div className='p2'><p>Located in the heart of the city, this luxurious, modern hotel offers </p></div>
        <div className='p3'><p>top-notch amenities for a perfect stay</p></div>
        <div className='p4'><p>EXPLORE &rarr;</p></div>
        </div>
        <div className='img-div'><img src={main2} className='img'/></div>
      </div>
    </>
  )
}
export default Header