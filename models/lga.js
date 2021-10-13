const mongoose = require("mongoose");

const lga = new mongoose.Schema(
  {
    email: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    name_id: { type: String },
    phone: { type: String },
    pollingunit_uniqueid: { type: String },
  },
  { collection: "lga" }
);

module.exports = mongoose.model("lga", lga);
