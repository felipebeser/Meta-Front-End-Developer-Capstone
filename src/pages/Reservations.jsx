import BookingForm from '../components/BookingForm'

export default function Reservations() {

  return (
    <>
    <div className='green-container' style={{textAlign: 'center'}}>
      <h1 style={{padding: '2rem'}}>Reservations</h1>
    </div>
    <BookingForm  />
    </>
  )
}