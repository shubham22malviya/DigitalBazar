const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    avtar: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
    },
    Address: {
      flat: {
        type: String,
       
      },
      Street: {
        type: String,
       
      },
      landmark: {
        type: String,
       
      },
      city: {
        type: String,
        
      },
      State: {
        type: String,
        
      },
      country: {
        type: String,
       
      },
      pin: {
        type: Number,
      
      },
      mobile: {
        type: Number,
       
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;