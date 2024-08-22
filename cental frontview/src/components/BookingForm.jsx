import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BookingForm = () => {
    const [carType, setCarType] = useState('')
    const [pickUpPoint, setPickUpPoint] = useState('')
    const [dropPoint, setDropPoint] = useState('')
    const [pickUpDate, setPickUpDate] = useState('')
    const [pickUpTime, setPickUpTime] = useState('')
    const [dropDate, setDropDate] = useState('')
    const [dropTime, setDropTime] = useState('')

    const navigate = useNavigate()


    const bookingHandler = (e) => {
        e.preventDefault()
        const data = {
            user_id : localStorage.getItem('_id'),
            carType : carType,
            pickUpPoint : pickUpPoint,
            pickUpDate : pickUpDate,
            pickUpTime : pickUpTime,
            dropPoint : dropPoint,
            dropDate : dropDate,
            dropTime : dropTime,
            token : localStorage.getItem('token')
        }
       axios
       .post('http://localhost:8080/api/booking/add-booking', data,)
       .then((res)=> {
        alert(res.data.message)
        navigate('/')
       })
       .catch((err) =>{
        console.log(err);
       })
    }
    

  return (
   <>
     <h4 className="text-white mb-4">CONTINUE CAR RESERVATION</h4>
                  <form onSubmit={bookingHandler}>
                    <div className="row g-3">
                      <div className="col-12">
                        <select className="form-select" aria-label="Default select example" onChange={(e)=>setCarType(e.target.value)}>
                          <option selected>Select Your Car type</option>
                          <option value= 'VW Golf VII' > VW Golf VII</option>
                          <option value= 'Audi A1 S-Line'> Audi A1 S-Line</option>
                          <option value= 'Toyota Camry'> Toyota Camry</option>
                          <option value= 'BMW 320 ModernLine'> BMW 320 ModernLine</option>
                        </select>
                      </div>
                      <div className="col-12">
                        <div className="input-group">
                          <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                            <span className="fas fa-map-marker-alt" /> <span className="ms-1">Pick Up</span>
                          </div>
                          <input className="form-control" type="text" placeholder="Enter a City or Airport" aria-label="Enter a City or Airport" onChange={(e)=>setPickUpPoint(e.target.value)}/>
                        </div>
                      </div>
                      <div className="col-12">
                        <a href="#" className="text-start text-white d-block mb-2">Need a different drop-off location?</a>
                        <div className="input-group">
                          <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                            <span className="fas fa-map-marker-alt" /><span className="ms-1">Drop off</span>
                          </div>
                          <input className="form-control" type="text" placeholder="Enter a City or Airport" aria-label="Enter a City or Airport" onChange={(e)=>setDropPoint(e.target.value)} />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group">
                          <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                            <span className="fas fa-calendar-alt" /><span className="ms-1">Pick Up</span>
                          </div>
                          <input className="form-control" type="date"  onChange={(e)=>setPickUpDate(e.target.value) }/>
                          <select className="form-select ms-3" aria-label="Default select example" onChange={(e)=>setPickUpTime(e.target.value)}>
                            <option  value= '12:00AM' selected>12:00AM</option>
                            <option value= '1:00AM'>1:00AM</option>
                            <option value= '2:00AM'>2:00AM</option>
                            <option value= '3:00AM'>3:00AM</option>
                            <option value= '4:00AM'>4:00AM</option>
                            <option value= '5:00AM'>5:00AM</option>
                            <option value= '6:00AM'>6:00AM</option>
                            <option value= '7:00AM'>7:00AM</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="input-group">
                          <div className="d-flex align-items-center bg-light text-body rounded-start p-2">
                            <span className="fas fa-calendar-alt" /><span className="ms-1">Drop off</span>
                          </div>
                          <input className="form-control" type="date" onChange={(e)=>setDropDate(e.target.value)}/>
                          <select className="form-select ms-3" aria-label="Default select example" onChange={(e) => setDropTime(e.target.value)}>
                            <option  value= '12:00AM' selected>12:00AM</option>
                            <option value= '1:00AM'>1:00AM</option>
                            <option value= '2:00AM'>2:00AM</option>
                            <option value= '3:00AM'>3:00AM</option>
                            <option value= '4:00AM'>4:00AM</option>
                            <option value= '5:00AM'>5:00AM</option>
                            <option value= '6:00AM'>6:00AM</option>
                            <option value= '7:00AM'>7:00AM</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <button type='submit' className="btn btn-light w-100 py-2">Book Now</button>
                      </div>
                    </div>
                  </form>
   </>
  )
}

export default BookingForm
