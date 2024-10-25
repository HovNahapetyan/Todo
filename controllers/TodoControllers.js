class TodoControllers {
    async getTodos(req, res) {
        try {
            const todos = await req.app.locals.services.todos.getTodos()
            res.status(200).json(todos)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async addTodo(req, res) {
        try {
            const body = req.body
            const todo = await req.app.locals.services.todos.addTodo(body)
            res.status(201).json(todo)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async removeTodo(req,res){
        try {
            const {id} = req.params
            const removeTodoId = await req.app.locals.services.todos.removeTodoId(id)
            res.status(200).json(removeTodoId) 
        } catch (error) {
            res.status(500).json(error)
        }
    }
    async updateTodoChecked(req,res){
        try {
            const {id} = req.params
            const {isDone} = req.body
            const updateTodo = await req.app.locals.services.todos.updateTodo(id,isDone)
            res.status(200).json(updateTodo)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = TodoControllers