const status = require("http-status");
const TaskModel = require("@models/TaskModal");
// let Tasks = [
//   { text: "task1", id: "xyz-1" },
//   { text: "task2", id: "xyz-2" },
//   { text: "task3", id: "xyz-3" },
//   { text: "task4", id: "xyz-4" },
// ];

module.exports = {
  async getAll(req, res) {
    try {
      let data = await TaskModel.find();
      res.status(200).send({
        success: true,
        message: "Tasks Fetched!",
        data: data,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  },

  // async getTaskById(req, res) {
  //   if (!has(req.params, "id"))
  //     throw { code: status.BAD_REQUEST, message: "You must specify the id" };

  //   let { id } = req.params;
  //   let data = await TaskModel.findById(id);
  //   res.json({ status: true, message: "Returning user", data });
  // },

  async addTask(req, res) {
    console.log("addTasks api hit");
    if (!req.body)
      throw { code: status.BAD_REQUEST, message: "You must specify some text" };
    try {
      const newTask = new TaskModel(req.body);
      await newTask.save();
      res.json({
        status: status.OK,
        success: true,
        message: "Task Added",
        newTask,
      });
    } catch (error) {
      res.json({
        status: status[500],
        success: false,
        message: `error message : ${error.message}`,
      });
    }
  },

  // async updateTask(req, res) {
  //   if (!has(req.body, req.params))
  //     throw {
  //       code: status.BAD_REQUEST,
  //       message: "You must specify the item to update",
  //     };

  //   const id = req.params;
  //   let oldTask = Tasks.find((t) => t.id === id);
  //   oldTask.text = req.body;
  //   res.json({ status: true, message: "Task updated" });
  // },

  // async deleteTask(req, res) {
  //   try {
  //     if (!req.params)
  //       throw {
  //         code: status.BAD_REQUEST,
  //         message: "You must specify the item to update",
  //       };

  //     let { id } = req.params;
  //     console.log({ delete_id: id });
  //     await TaskModel.delete(id);
  //     res.json({ status: true, message: "task deleted" });
  //   } catch (error) {
  //     res.status(500).send({
  //       success: false,
  //       message: error.message,
  //     });
  //   }
  // },
};
