import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import UnderConstruction from './pages/UnderConstruction'
import Reservations from './pages/Reservations'
import ConfirmedBooking from './pages/ConfirmedBooking'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/confirmed-booking" element={<ConfirmedBooking />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
