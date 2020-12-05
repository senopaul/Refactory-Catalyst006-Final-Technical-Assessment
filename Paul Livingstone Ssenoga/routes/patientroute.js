const express = require("express");
const patientsmodel = require("../models/patientsmodel");
const router = express.Router();
const Patients = require("../models/patientsmodel");

router.get("/register", (req, res) => {
  res.render("reg", { title: "Patients  Registration Form" });
});

router.post("/register", async (req, res) => {
  try {
    const addPatient = new Patients(req.body);
    await addPatient.Save();
    console.log("Succesfully Registered");
    res.redirect("/register");
  } catch (err) {
    console.log(err);
    res.status(400).send("Patient info not saved");
  }
});

module.exports = router;
