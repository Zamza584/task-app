const mongoose = require("mongoose")

const TasksSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  tasks: [
    {
      id: Number,
      name: String,
    },
  ],
  scheduledTasks: [
    {
      name: String,
      time: String,
    },
  ],
});

const TasksModel = mongoose.model("tasks", TasksSchema);

module.exports = TasksModel;
