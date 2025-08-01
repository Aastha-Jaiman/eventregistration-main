const User = require("../models/User");
const sendEmail = require("../utils/sendMail");


exports.registerUser = async (req, res) => {
  try {
    const { fullname, email, phone, companyName, companyAddress, city, role, stallNumber } =
      req.body;

    if (!fullname || !phone || !companyName || !city || !role) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (role === "exhibitor" && !stallNumber) {
      return res
        .status(400)
        .json({ message: "Stall number is required for exhibitor role" });
    }

    const existingUser = await User.findOne({ phone });

 if (existingUser) {
      return res.status(409).json({
        message: "User with this phone number already exists",
        registrationNumber: existingUser.registrationNumber,
      });
    }

    const count = await User.countDocuments();
    const uniqueRegNo = `jcds2025_${count + 1}`;

    const user = new User({
      fullname,
      email,
      phone,
      companyName,
      companyAddress,
      city,
      role,
      registrationNumber: uniqueRegNo,
      stallNumber: role === "exhibitor" ? stallNumber : undefined,
    });

    await user.save();

    try {
      const subject = "Registration Successful";
      const message = `Dear ${fullname},\n\nThank you for registering as a ${role}.\n\nYour registration number is: ${uniqueRegNo}\n\nRegistration is successful!`;
      await sendEmail(email, subject, message);
    } catch (emailError) {
      console.error("Email send failed:", emailError.message);
    }

    res.status(201).json({
      message: "Registration successful!",
      user,
    });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({
      message: "Something went wrong while registering the user.",
      error: error.message,
    });
  }
};

exports.searchAndFilterUsers = async (req, res) => {
  try {
    const { search = "", role, city } = req.query;

    const query = {
      $and: [],
    };

    if (search) {
      const searchRegex = new RegExp(search, "i");
      query.$and.push({
        $or: [
          { fullname: searchRegex },
          { phone: searchRegex },
          { registrationNumber: searchRegex },
        ],
      });
    }

    if (role) {
      query.$and.push({ role });
    }
    
    if (city) {
      query.$and.push({ city });
    }

    if (query.$and.length === 0) {
      delete query.$and;
    }

    const users = await User.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    console.error("Error searching/filtering users:", error.message);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};