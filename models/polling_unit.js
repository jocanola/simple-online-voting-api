const mongoose = require("mongoose");

const PollingUnit = new mongoose.Schema(
  {
    date_entered: { type: String },
    entered_by_user: { type: String },
    lat: { type: String },
    lga_id: { type: String },
    long: { type: String },
    polling_unit_description: { type: String },
    polling_unit_id: { type: String },
    polling_unit_name: { type: String },
    polling_unit_number: { type: String },
    uniqueid: { type: String },
    uniquewardid: { type: String },
    user_ip_address: { type: String },
    ward_id: { type: String },
  },
  { collection: "polling_unit" }
);

module.exports = mongoose.model("pollingUnit", PollingUnit);
