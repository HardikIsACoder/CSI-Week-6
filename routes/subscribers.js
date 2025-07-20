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
router.get("/:id", getSubscriber, (req, res) => {
  try {
    res.send(res.subscriber.name);
  } catch (err) {
    res.json({ message: "Invalid Id" });
  }
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
router.patch("/:id", getSubscriber, async (req, res) => {
  if (req.body.name != null) {
    res.subscriber.name = req.body.name;
  }
  if (req.body.subToChannel != null) {
    res.subscriber.subToChannel = req.body.subToChannel;
  }
  try {
    const updatedSubscriber = await res.subscriber.save();
    res.json({ message: "Updated Successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE
router.delete("/:id", getSubscriber, async (req, res) => {
  try {
    await Subscriber.deleteOne(res.subscriber);
    // await res.subscriber.deleteOne;      // Deprecated
    res.json({ message: "Subscriber Deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getSubscriber(req, res, next) {
  let subscriber;
  try {
    subscriber = await Subscriber.findById(req.params.id);
    if (subscriber == null) {
      return res.status(404).json({ message: "Can't find the subscriber." });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
  res.subscriber = subscriber;
  next();
}

module.exports = router;
