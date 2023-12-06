// router.js
const express = require("express");
const User = require("../schema/user.js");

const router = express.Router();

router.post("/users", async (req, res) => {
  const { customerName, pickupLocation, dropOffLocation } = req.body;

  try {
    console.log("Received data:", {
      customerName,
      pickupLocation,
      dropOffLocation,
    });

    const user = new User({ customerName, pickupLocation, dropOffLocation });
    const savedUser = await user.save(); // Use await here

    console.log("User saved:", savedUser);

    res.send(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Get all users

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    console.log("Users data:", users); // Log the data
    res.send(users);
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
