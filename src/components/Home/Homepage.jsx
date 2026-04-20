
import Header from './Header'
import Body1 from './Body1'
import Body2 from './Body2'
import Body3 from './Body3'
import Body4 from './Body4'
import Body5 from './Body5'
import Footer from './Footer'
function HomePage(){
  return(
    <>
      <Header />
      <div className='flex flex-col w-[100] bg-[rgb(245,241,236)]'>
        <Body1 />
        <Body2 />
        <Body3 />
        <Body4 />
        <Body5 />
      </div>
      <Footer />
    </>
  )
}
export default HomePage