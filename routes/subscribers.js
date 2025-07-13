const express = require("express");
const router = express.Router();
const Subscriber = require("../models/subscriber");

// GET ALL
router.get("/", async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET ONE
router.get("/", (req, res) => {
  res.send(req.body.params);
});

// CREATE
router.post("/", async (req, res) => {
  const subscriber = new Subscriber({
    name: req.body.name,
    subToChannel: req.body.subToChannel,
  });
  try {
    const newSubscriber = await subscriber.save();
    res.status(201).json(newSubscriber);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// UPDATE
router.patch("/", (req, res) => {});
// DELETE
router.delete("/", (req, res) => {});

module.exports = router;
