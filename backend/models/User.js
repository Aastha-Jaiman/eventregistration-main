const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    companyAddress: {
        type: String,
    },
    city: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['visitor', 'exhibitor', 'organizer'],
        required: true
    },
    stallNumber: {
        type: String,
    },
    registrationNumber: {
      type: String,
      required: [true, "Registration number is required"],
      unique: true,
    },
},
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);