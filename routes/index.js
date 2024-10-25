const express = require('express');
const router = express.Router();
const TodoControllers = require('../controllers/TodoControllers')
const controllers = new TodoControllers()

/* GET home page. */

router.get('/', controllers.getTodos);
router.post('/',controllers.addTodo);
router.delete('/:id',controllers.removeTodo);
router.patch('/:id',controllers.updateTodoChecked)

module.exports = router;
