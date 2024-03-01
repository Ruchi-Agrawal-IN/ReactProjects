 const router = require('express').Router();

const tasks = require('@controllers/tasks.js');


router.get("/all", tasks.getAll);
// router.get("/:id", tasks.getTaskbyId);
router.post("/add", tasks.addTask);
// router.delete("/:id", tasks.deleteUser);
// router.patch("/:id", tasks.updateTask);

module.exports = router;
