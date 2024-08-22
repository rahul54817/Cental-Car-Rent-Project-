const Booking = require("../Models/BookingModal");
// const Car = require("../Models/CarModal")

// new Bookings 
exports.addBooking = async (req, res) => {
  console.log(req.body);
  const {
    user_id,
    carType,
    pickUpPoint,
    pickUpDate,
    pickUpTime,
    dropPoint,
    dropDate,
    dropTime,
    rent
  } = req.body;

  if (
    carType === "" ||
    pickUpPoint === "" ||
    pickUpDate === "" ||
    pickUpTime === "" ||
    dropPoint === "" ||
    dropDate === "" ||
    dropTime === ""
  ) {
    return res.status(404).json({
      result: false,
      message:
        "requied parameters : user_id, carType , pickUpPoint, pickUpDate, pickUpTime, dropPoint, dropDate, dropTime, rent",
    });
  }
  let date1 = new Date(pickUpDate)
  let date2 = new Date(dropDate)

  const numberOfDays = (date2 - date1) / (1000*60*60*24);
  console.log(numberOfDays);

  const amount = Number(numberOfDays) * rent;
  
  console.log("amount :  "+amount);

  try {
    const newBooking = new Booking({
      user_id: user_id,
      carType: carType,
      pickUpPoint: pickUpPoint,
      pickUpDate: pickUpDate,
      pickUpTime: pickUpTime,
      dropPoint: dropPoint,
      dropDate: dropDate,
      dropTime: dropTime,
      amount : amount
    });

    await newBooking.save();

    return res.status(200).json({
      result: true,
      message: "Booking Succssesfully ",
    });
  } catch (error) {
    return res.status(400).json({
      result: false,
      messsage: "Booking Failed due to   " + error,
    });
  }
};


// get all Bookings
exports.getAllBookings = async (req, res) => {

  try {
    

    const bookngDetails = await Booking.aggregate([
      
      {
        $lookup : {
          from : 'users', 
          localField : "user_id",
          foreignField : "_id",
          as : "customer_details"

        }
      },
      {
        $unwind : "$customer_details"
      },
      {
        $addFields : { "customer_details.password" : "$REMOVE"}
      }
])

    res.status(200).json({
      result: true,
      message: "fatch all booking successfuly",
      
      bookings : bookngDetails
    });
  } catch (error) {

    res.status(500).json({
      result: false,
      message: error.message,
    });
    
  }

}

// get booking details by user ID
exports.getBookingByUser = async (req, res) => {

  try {
    const userBookings = await Booking.find({ user_id : req.params.user_id})

    if(userBookings.length === 0){
      return res.status(404).json({
        result : false,
        message : "no record found by this uesr",

      })
    }

    res.status(200).json({
      result : true,
      message : "successfully fatch booking details by this user ",
      user_bookings : userBookings

    })
  }
  catch (err) {
    res.status(500).json({
      result : false,
      message : err
    })
  }

}
