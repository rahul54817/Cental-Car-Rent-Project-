const multer = require("multer");
const path = require("path");
const Car = require("../Models/CarModel");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,

  fileFilter: (req, file, cb) => {
    const fileType = /jpeg|jpg|png/;
    const extname = fileType.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = fileType.test(file.mimetype);

    console.log(
      "File extension:",
      path.extname(file.originalname).toLowerCase()
    );
    console.log("MIME type:", file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb("Error: Images Only!");
    }
  },
}).single("image");

// add new Car
exports.addCar = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(422).json({ error: err });
    }

    try {
      console.log(req.body);

      const { name, model, seater, rent, fule_type } = req.body;

      console.log(req.body);
      console.log(req.file.path);

      if (
        name === "" ||
        model === "" ||
        seater === "" ||
        rent === "" ||
        fule_type === ""
      ) {
        return res.status(400).json({
          result: false,
          message:
            "required filled : name , model , seater , fuel_type, rent, image ",
        });
      }

      const newCar = new Car({
        name: name,
        model: model,
        seater: seater,
        fule_type: fule_type,
        rent: rent,
        image: req.file.path,
      });

      const data = await newCar.save();

      return res.status(200).json({
        result: true,
        message: "added new Car Successfully",
        data: data,
      });
    } catch (error) {
      res.status(422).json({
        result: false,
        message: error,
      });
    }
  });
};

// Get All registerd Cars
exports.getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();

    return res.status(200).json({
      result: true,
      message: "fatching Cars succesfully",
      all_cars: cars,
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      message: error,
    });
  }
};

//Get Car by ID
exports.getCarByID = async (req, res) => {
  try {
    if (req.params._id) {
      const car = await Car.findOne({ _id: req.params._id });
      if (!car) {
        res.status(404).json({ result: false, massage: "Car not found" });
      }
      res.status(200).json({
        result: "true",
        message: "car fetched successfully",
        car: car,
      });
    } else {
      res.status(400).json({
        result: "false",
        message: "reqires fileds : _id",
      });
    }
  } catch (error) {}
};

// Edit Car by ID
exports.updateCarDetails = async (req, res) => {
  console.log(req.body);
  
  try {
    const car = await Car.findById(req.params._id);
    if (!car) {
      return res.status(404).json({ result: false, message: "Car not found" });
    }

    const { name, model, seater, rent, fuel_type } = req.body;

    if (name) car.name = name;
    if (model) car.model = model;
    if (seater !== undefined && seater !== null) car.seater = seater;
    if (rent !== undefined && rent !== null) car.rent = rent;
    if (fuel_type) car.fule_type = fuel_type;
    if (req.file && req.file.path) car.image = req.file.path;

    const updatedCarDetails = await car.save();

    return res.status(201).json({
      result: true,
      message: "Updated successfully",
      updated_data: updatedCarDetails
    });
  } catch (error) {
    return res.status(500).json({
      result: false,
      message: "Something went wrong: " + error.message,
      error: error,
    });
  }
};


// Delete Car By ID
exports.deleteCarByID = async (req, res) => {
  const car_id = req.params._id

  try {

    const car = await Car.findById({_id : car_id})

    if(!car) {
      return res.status(404).json({
          result : false,
          message : "Car not Found"
        }
      )
    }

    await car.deleteOne()
    
    res.status(200).json({
      result : true,
      message : "Car deleted Successfully"
    })
    
  } catch (error) {

    res.status(500).json({
      result : false,
      message : error
    })
    
  }

}


