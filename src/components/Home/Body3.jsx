import main from '../../assets/main.jpg'
import './Body3.css'

function Body3(){
  return(
    <>
      <div className='body-div3'>
          <div className='body-div3-sub1'>
            <div className='div3-sub1-extras1'><p>EXQUISITE AND LUXURIOS</p></div>
            <div className='div3-sub1-extras2'><p>Rooms and suite collection</p></div>
          </div>
          <div className='body-div3-sub2'>
            <div className='div3-sub2-extras1'>
              <div>
                <p>price: <span className='span2'>$50/night</span></p>
                <h1 className='span2'>Standard Room</h1>
                <p className='span3'>Cozy and modern, this room offers essential ammenities for a comfortable stay, perfect for solo travellers or couples seeking relaxation</p>
              </div>
              <div>
                <p>Room size: Room Size 28M</p>
                <p>Bed size: 1 King Bed </p>
                <p>Spacing: 2 Adult and 1 Child</p>
              </div>
              <div>
                <button className='button2'>BOOK NOW</button>
                <button className='button3'>VIEW ROOM &rarr;</button>
              </div>
            </div>
            <div className='div3-sub2-extras2'><img className= "img4" src={main}/></div>
          </div>
        </div>
    </>
  )
}
export default Body3