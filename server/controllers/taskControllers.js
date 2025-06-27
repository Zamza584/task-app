const TasksModel = require("../models/Tasks");

const saveTasks = async (req, res) => {
  try {
    const { tasks, scheduledTasks } = req.body;

    const taskList = await TasksModel.create({
      tasks,
      scheduledTasks,
    });

    res.json(taskList);

    
  } catch (error) {
    console.log(error);
  }
};

module.exports = { saveTasks };
