const TasksModel = require("../models/Tasks");
const UserModel = require("../models/User");

const saveTasks = async (req, res) => {
  try {
    const { user, tasks, scheduledTasks } = req.body;

    const userName = user.userName;
    const dbuser = await UserModel.findOne({ userName });
    const userId = dbuser._id.toString();

    const taskList = await TasksModel.replaceOne(
      { userId: userId },
      {
        userId: userId,
        tasks: tasks,
        scheduledTasks: scheduledTasks,
      },
      {
        upsert: true
      }
    );

    res.json(taskList);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { saveTasks };
