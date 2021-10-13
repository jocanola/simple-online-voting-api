const mongoose = require("mongoose");

const announcedLgaResults = new mongoose.Schema(
  {
    date_entered: {
      type: String,
    },
    entered_by_user: { type: String },
    lga_name: { type: String },
    party_abbreviation: { type: String },
    party_score: { type: String },
    result_id: { type: String },
    user_ip_address: { type: String },
  },
  { collection: "announced_lga_results" }
);

module.exports = mongoose.model("AnnouncedLgaResults", announcedLgaResults);
