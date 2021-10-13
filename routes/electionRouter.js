const AnnouncedLgaResults = require("../models/announced_lga_results");
const AnnouncedPuResults = require("../models/announced_pu_results");
const pollingUnit = require("../models/polling_unit");
const Lga = require("../models/lga");
const router = require("express").Router();
//Question 1
//Get all the list of Polling Unit
router.get("/pollingUnit/all", async (req, res) => {
  try {
    const files = await pollingUnit.find();
    res.status(200).json(files);
  } catch (error) {
    res.status(404).json(error);
  }
});

//Get all the Polling Unit Results
router.get("/announcedPuResults/all", async (req, res) => {
  try {
    const files = await AnnouncedPuResults.find();
    res.status(200).json(files);
  } catch (error) {
    res.status(404).json(error);
  }
});

//Get results of a Particular Polling unit using polling_unit_uniqueid from all polling unit response
router.get("/announcedPuResults/result/:id", async (req, res) => {
  try {
    const files = await AnnouncedPuResults.find({
      polling_unit_uniqueid: req.params.id,
    });
    res.status(200).json(files);
  } catch (error) {
    res.status(404).json(error);
  }
});

//Question 2
//Get all the Local government in Delta State
router.get("/lga/all", async (req, res) => {
  try {
    const files = await Lga.find();
    res.status(200).json(files);
  } catch (error) {
    res.status(404).json(error);
  }
});

router.get("/pollingUnit/pollingUnitByLga/:id", async (req, res) => {
  try {
    const files = await pollingUnit.find({ lga_id: req.params.id });
    return res.status(200).json(files);
  } catch (error) {
    res.status(404).json(error);
  }
});

// router.get("/announcedLgaResults/all", async (req, res) => {
//   try {
//     const files = await AnnouncedLgaResults.find();
//     res.status(200).json(files);
//   } catch (error) {
//     res.status(404).json(error);
//   }
//   AnnouncedLgaResults;
// });

//Question 3
router.post("/create", async (req, res) => {
  //send the new polling unit with result to database by passing it to request body
  try {
    //create new polling unite result
    const newPollingUnit = new pollingUnit(req.body);
    //save it to database
    const createdPollingUnit = await newPollingUnit.save();
    return res.send("store result successfully");
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
