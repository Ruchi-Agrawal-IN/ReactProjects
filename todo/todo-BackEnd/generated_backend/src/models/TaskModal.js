const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: false,
  },
  priority: {
    type: Number,
    required: false,
  },
  isCompleted: {
    type: Boolean,
    required: false,
  },
});

module.exports = mongoose.model("TaskModal", TaskSchema);
