const User = require("../models/user.model");

const getAllUser = async (req, res) => {
  let user = await User.find({});
  res.status(200).json({ user });
};

const getSingleUser = async (req, res) => {
  let user = await User.findById(req.params.id);
  res.status(200).json({ user });
};

const createNewUser = async (req, res) => {
  let user = await User.create({ name: req.body.name });
  res.status(201).json({ user });
};

const deleteUser = async (req, res) => {
  let user = await User.findByIdAndDelete(req.params.id);
  res.status(200).json({ user });
};

const updateUser = async (req, res) => {
  let user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({ user });
};

module.exports = {
  getAllUser,
  getSingleUser,
  createNewUser,
  deleteUser,
  updateUser,
};
