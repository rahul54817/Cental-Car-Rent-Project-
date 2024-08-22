const User = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register User
exports.createUser = async (req, res) => {
  const { name, email, password, confirm_password, role } = req.body;
  if (
    name === "" ||
    email === "" ||
    password === "" ||
    confirm_password === ""
  ) {
    return res.status(200).json({
      result: false,
      message: "requied parameters : name , email , password, confirm_password",
    });
  }
  if (password !== confirm_password) {
    return res.status(400).json({
      result: false,
      message: "password not match",
    });
  }

  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return res.status(400).json({
        result: false,
        message: "user already exist",
      });
    }

    if (confirm_password === password) {
      const hasPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        name: name,
        email: email,
        password: hasPassword,
        role: role || "user",
      });

      const data = await newUser.save();
      return res.status(200).json({
        result: true,
        message: "User signup successfully",
        data: data,
      });
    }

    return res.status(400).json({
      result: false,
      message: "Signup failed",
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      message: error.message,
    });
  }
};

// login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (email === null && password === null) {
    return res.status(200).json({
      result: false,
      message: "requied fillerd : email, password",
    });
  }
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        result: false,
        message: "user not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(404).json({
        result: false,
        message: "password not match",
      });
    }

    const payload = {
      id: user._id,
      name: user.name,
      role: user.role,
    };

    const secret_key = process.env.JWT_SECRET_KEY;

    const token = jwt.sign(payload, secret_key, { expiresIn: "1d" });

    res.header("Authorization", `Bearer ${token}`);

    return res.status(200).json({
      result: true,
      message: "user login successfully",
      data: {
        _id: user._id,
        role: user.role,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({
      result: false,
      message: error.message,
    });
  }
};

// get all registered users

exports.userAction = async (req, res) => {
  res.json({ message: "user action performed" });
};

exports.adminAction = async (req, res) => {
  try {
    res.json({ message: "admin action perfomed" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.getAllUser = async (request, response) => {
  try {
    const users = await User.find();

    response.status(200).json({
      result: true,
      message: "fatch all users successfuly",
      users: users,
    });
  } catch (error) {
    response.status(500).json({
      result: false,
      message: error.message,
    });
  }
};
