import { MapPinnedIcon, Bath } from 'lucide-react'
import './Body1.css'

function Body1(){
  return(
    <>
      <div className='body-div1'>
        <div className='body-div1-sub1'>
          <div className='sub1-extras1'><MapPinnedIcon className = "icon"/></div>
          <div className='sub1-extras2'><p>Located in the heart of Ago Iwoye city</p></div>
          <div className='sub1-extras3'><p>Ideally located in the city's heart for easy access and convinience</p></div>
        </div>
        <div className='body-div1-sub2'>
          <div className='sub2-extras1'><p><Bath className = "icon"/></p></div>
          <div className='sub2-extras2'><p>Luxurious, modern, and comfortable</p></div>
          <div className='sub2-extras3'><p>Experience a luxurious, modern and fully equipped space for comfort</p></div>
        </div>
        <div className='body-div1-sub3'>
          <div className='sub3-extras1'><p></p></div>
          <div className='sub3-extras2'><p>Friendly and welcoming staff</p></div>
          <div className='sub3-extras3'><p>Our friendly and welcoming staff ensure a delightful stay everytime</p></div>
        </div>
        <div className='body-div1-sub4'>
          <div className='sub4-extras1'><p></p></div>
          <div className='sub4-extras2'><p>Best prices and great offers</p></div>
          <div className='sub4-extras3'><p>Enjoy unbeatable prices with fantastic offers tailored just for you</p></div>
        </div>
      </div>
    </>
  )
}
export default Body1