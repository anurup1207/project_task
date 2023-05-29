const Task = require("../models/Tasks");

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  // res.send("get all items")
};
const getTask = async (req, res) => {
  try {
    const { id: TaskId } = req.params;
    const tasks = await Task.findOne({ _id: TaskId });
    if (!tasks) {
      return res.status(404).json({ msg: `No task with id : ${TaskId}` });
    }
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }

// res.send("get all items")
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: TaskId } = req.params;
    const tasks = await Task.findOneAndDelete({ _id: TaskId });
    if (!tasks) {
      return res.status(404).json({ msg: `No task with id : ${TaskId}` });
    }
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  // res.send("Delete Task")
};
const updateTask = async (req, res) => {
  try {
    const { id: TaskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: TaskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: `No task with id : ${TaskId}` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  // res.send("Update Task ")
};

module.exports = { getAllTask, getTask, createTask, updateTask, deleteTask };
