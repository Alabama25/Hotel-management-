import HomePage from "./components/Home/Homepage"
import RoomPage from './components/Rooms/RoomPage'
import BookingPage from "./components/Bookings/BookingPage"
import { Routes, Route } from "react-router"
import './index.css'
function App(){
  return(
    <>
    <Routes>
      <Route path="/" element = {<HomePage />}/>
      <Route path="Rooms" element = {<RoomPage />}/>
      <Route path="Bookings" element = {<BookingPage />}/>
    </Routes>
    </>
  )
}
export default App