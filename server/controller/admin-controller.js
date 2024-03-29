const Contact = require("../models/contact");
const User = require("../models/user");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      return res.status(400).json({ message: "No users found" });
    }

    return res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.find({ _id: id }, { password: 0 });

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;

    const updatedData = await User.updateOne(
      { _id: id },
      { $set: updateUserData }
    );

    return res.status(200).json(updatedData);
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User deleted Successfully..." });
  } catch (error) {
    next(error);
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    if (!contacts || contacts.length === 0) {
      return res.status(400).json({ message: "No Contacts Found!" });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
};

const deleteContactById = async (req, res) => {
  try {
    const id = req.params.id;
    await Contact.deleteOne({ _id: id });
    return res.status(200).json({ message: "Contact Deleted Successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  getAllContacts,
  deleteContactById,
};
