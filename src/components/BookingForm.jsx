import './BookingForm.css';
import {useEffect, useState} from "react";
import {validateDate} from ".././utils/utils";
import { useNavigate } from 'react-router-dom';


function BookingForm() {
 const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
 const [time, setTime] = useState("17:00");
 const [guests, setGuests] = useState(1);
 const [occasion, setOccasion] = useState("");

 const nav = useNavigate();

 useEffect(() => {
  console.log(date)
  console.log(validateDate(date))
 },[date])
 const getIsFormValid = () => {
   return (
     validateDate(date) &&
     time &&
     guests > 0 &&
     occasion
   );
 };


 const handleSubmit = (e) => {
   e.preventDefault();
   nav('/confirmed-booking')
 };

 return (
   <div className="form-container">
     <form onSubmit={handleSubmit}>
       <fieldset>
         <h2>Book a table</h2>
         <div className="Field">
           <label>Date<sup>*</sup>
           </label>
           <input
              type='date'
             value={date}
             onChange={(e) => {
               setDate(e.target.value);
             }}
             placeholder="Date"
           />
         </div>
         <div className="Field">
           <label>Time</label>
           <input
             value={time}
             onChange={(e) => {
               setTime(e.target.value);
             }}
             placeholder="time"
           />
         </div>
         <div className="Field">
           <label>Number of guests<sup>*</sup>
           </label>
           <input
              type='number'
              value={guests}
              onChange={(e) => {
                setGuests(e.target.value);
              }}
              placeholder="Number of guests"
           />
         </div>
         <div className="Field">
           <label>
             Occasion <sup>*</sup>
           </label>
           <select value={occasion} onChange={(e) => setOccasion(e.target.value)}> 
             <option value="role">Occasion</option> 
             <option value="individual">Birthday</option> 
             <option value="business">Anniversary</option> 
           </select> 
         </div>
         <button type="submit" disabled={!getIsFormValid()}>
           Make your reservation
         </button>
       </fieldset>
     </form>
   </div>
 );
}

export default BookingForm;