const Testimonial = require("../Models/TestimonialModal");
const multer = require("multer");
const path = require("path");

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

// add Testimonials
exports.addTestimonial = async (req, res) => {
  upload(req, res, async (err) => {
    console.log(err);
    if (err) {
      return res.status(422).json({ error: err });
    }

    try {
      const { person_name, proffession, message } = req.body;
      // const profile_img = req.file.path;

      if (
        person_name === "" ||
        proffession === "" ||
        message === "" 
      ) {
        return res.status(400).json({
          result: false,
          message:
            "required filled : person_name, proffession, message, image",
        });
      }

      const newTestimonial = new Testimonial({
        person_name: person_name,
        proffession: proffession,
        profile_img: req.file.path,
        message: message,
      });

      await newTestimonial.save();

      res.status(201).json({
        result: true,
        message: "Testimonial added succesfully",
      });
    } catch (error) {
      res.status(422).json({
        result: false,
        message: error,
      });
    }
  });
};

//get Testinomial from DB
exports.getTestimonials = async (req, res) => {
  try {
    const testimonials = await Testimonial.find();

    if (testimonials.length < 1) {
      return res.status(404).json({
        result: false,
        message: "no testimonials found",
      });
    }

    res.status(200).json({
      result: true,
      message: "fatching succefully",
      testimonials: testimonials,
    });
  } catch (error) {
    res.status(422).json({
      result: false,
      message: error,
    });
  }
};

// Delete Testimonial  by ID
exports.deleteTestimonialByID = async (req, res) => {

  try {
    let testimonial_id = req.params._id

    const testimonial = await Testimonial.findById({_id : testimonial_id})

    if(!testimonial){
      return res.status(404).json({
        result : false,
        message  : "testimonial not found"
      })
    }

    await testimonial.deleteOne()
    res.status(200).json({
      result : true,
      message : "Successfully Deleted"
    })
  }
  catch (error) {
    res.status(500).json({
      result: false,
      message: error,
    });
  }



}
