const mongoose = require("mongoose");

const AnnouncedPuResults = new mongoose.Schema(
  {
    date_entered: { type: String },
    entered_by_user: { type: String },
    party_abbreviation: { type: String },
    party_score: { type: String },
    polling_unit_uniqueid: { type: String },
    result_id: { type: String },
    user_ip_address: {type:String},
  },
  { collection: "announced_pu_results" }
);

module.exports = mongoose.model("AnnouncedPuResults", AnnouncedPuResults);
