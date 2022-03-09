const express = require("express");

const route = express.Router();

const {
  getAllUser,
  getSingleUser,
  createNewUser,
  deleteUser,
  updateUser,
} = require("../controller/user.controller");

route.get("/", getAllUser);

route.get("/:id", getSingleUser);

route.post("/", createNewUser);

route.delete("/:id", deleteUser);

route.patch("/:id", updateUser);

module.exports = route;
