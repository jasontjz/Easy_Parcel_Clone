const mongoose = require("mongoose");
const { Schema } = mongoose;

const parcelSchema = new Schema({
  customer: String,
  deliveryman: String,
  status: String,
  location: {
    origin: String,
    destination: String,
  },
  quotation: String,
  duration: String,
  parcelDetails: {
    content: String,
    weightKg: Number,
    fragile: Boolean,
    price: Number,
  },
  senderDetails: {
    name: String,
    emailAddress: String,
    contactNumber: String,
    address: String,
    unitNum: String,
    postalCode: String,
  },
  receiverDetails: {
    name: String,
    emailAddress: String,
    contactNumber: String,
    address: String,
    unitNum: String,
    postalCode: String,
  },
  chatLog: [Object]
});

const Parcel = mongoose.model("Parcel", parcelSchema);

module.exports = Parcel;
