// router.js
const express = require("express");
const User = require("../schema/user.js");
const router = express.Router();

// Create a user

router.post("/userData", async (req, res) => {
  const data = new User({
    customerName: req.body.customerName,
    pickupLocation: req.body.pickupLocation,
    dropOffLocation: req.body.dropOffLocation,
  });

  try {
    const savedData = await data.save();
    res.status(200).json(savedData);
    console.log("Received data:", savedData);
  } catch (error) {
    res.status(400).json({ message: error.message });
    console.error(error);
  }
});

// Get all users


router.get("/getUsers", async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    res.json(users);
    console.log("Users data:", users); // Log the data
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Update a user
router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { customerName, pickupLocation, dropOffLocation } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      id,
      { customerName, pickupLocation, dropOffLocation },
      { new: true }
    );
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete a user
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByIdAndDelete(id);
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
