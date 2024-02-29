
const status = require('http-status');
const has = require('has-keys');
const Tasks = [
  { text: "task1", id: "xyz-1" },
  { text: "task2", id: "xyz-2" },
  { text: "task3", id: "xyz-3" },
  { text: "task4", id: "xyz-4" },
];

module.exports={
    async getAll(req, res){
        try {
          res.status(200).send({
            success: true,
            message: 'Tasks Fetched!',
            data: Tasks,
          });
        } catch (error) {
          res.status(500).send({
            success: false,
            message: error.message,
          });
        }
      },

      async getTaskById(req, res){
        if(!has(req.params, 'id'))
        throw {code: status.BAD_REQUEST, message: 'You must specify the id'};

        let {id} = req.params;
        let data = Tasks.filter((t)=> t.id === id);
        res.json({status: true, message: 'Returning user', data});
      },

      async addTask(req, res){
        if(!has(req.params, ['text', 'id']))
        throw {code: status.BAD_REQUEST, message: 'You must specify some text'};

        [...Tasks, req.body];
        res.json({status: true, message: 'Task Added'})
      },

      async updateTask(req, res){
        if(!has(req.body, req.params))
                throw {code: status.BAD_REQUEST, message: 'You must specify the item to update'};
    
         const id = req.params;
         let oldTask = Tasks.find(t => t.id === id);
         oldTask.text = req.body
            res.json({status: true, message: 'Task updated'});
      },
       async deleteTask(req, res) {
        try {
            if(!req.params)throw {code: status.BAD_REQUEST, message: 'You must specify the item to update'}; 
        } catch (error) {
          res.status(500).send({
            success: false,
            message: error.message,
          });
        }
      },
}







