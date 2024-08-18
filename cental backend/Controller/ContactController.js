const Contact = require("../Models/ContactModels");

exports.createContact = async (req, res) => {
  const {
    address,
    email,
    contact_number,
    branches,
    facebook_link,
    instagram_link,
    tweeter_link,
    linkedin_link,
    website
  } = req.body;

  if (
    address === "" ||
    email === "" ||
    contact_number === null ||
    branches === null ||
    facebook_link === "" ||
    instagram_link === "" ||
    tweeter_link === "" ||
    linkedin_link === "" ||
    website === ''
  ) {
    return res.status(400).json({
      result: false,
      message:
        "require filed address, email, contact_number, website, branches, facebook_link, instagram_link, tweeter_link, linkedin_link ",
    });
  }

  try {
    const contactInformation =  new Contact({
           address : address,
            email : email,
            contact_number : contact_number, 
            website : website,
            branches : branches,
            facebook_link : facebook_link ,
            instagram_link : instagram_link,
            tweeter_link  : tweeter_link,
            linkedin_link  : linkedin_link

    
    })

    await contactInformation.save();

    return res.status(200).json({
         result: true,
      message: "Contact information added",
    })
  }
  catch (error) {
    res.status(500).json({
      result: false,
      message: error.message,
    });
}
    
};


exports.updateContact = async (req, res) => {

};

exports.getContactDetails = async (req, res) => {
  try {

    const contactsDetails = await Contact.find()
    res.status(200).json({
      result : true,
      message : "fatch contact details successfully",
      contact_details : contactsDetails
    })
    
  } catch (error) {
    res.status(200).json({
      result : false,
      message : "fatch contact details failed due to  "+ error
      
    })
    
    
  }

};


