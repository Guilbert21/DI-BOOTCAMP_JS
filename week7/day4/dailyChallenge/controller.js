// controllers/userController.js
const bcrypt = require('bcrypt');
const userModel = require('./userModel.js');

const registerUser = async (req, res) => {
  try {
    const { username, email, first_name, last_name, password } = req.body;
    const hashed_password = await bcrypt.hash(password, 10);
    const userId = await userModel.createUser({ username, email, first_name, last_name, hashed_password });
    res.status(201).json({ userId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userModel.getUserByUsername(username);

    if (!user) {
      return res.status(401).json({ error: 'Invalid Credentials' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid Credentials' });
    }

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await userModel.getAllUsers();
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userModel.getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const updateUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = req.body;
    const user = await userModel.updateUserById(userId, updatedUser);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { registerUser, loginUser, getAllUsers, getUserById, updateUserById };
