const Task = require("../models/Task");

// Create Task
exports.createTask = async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      user: req.user
    });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Get Tasks
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user });
    res.json(tasks);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
