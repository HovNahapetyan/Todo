class TodoServices {
    constructor(models) {
        this.models = models
    }
    async getTodos() {
        const todos = await this.models.todos.find()
        return todos
    }
    async addTodo(body) {
        body.isDone = false
        const document = await this.models.todos(body)
        const todo = await document.save()
        return todo
    }
    async removeTodo(id) {
        const deleteId = await this.models.todos.findByIdAndDelete(id)
        return deleteId
    }
    async updateTodoChecked(id, isDone) {
        const updateId = await this.models.todos.findByIdAndUpdate(id,{isDone : isDone})
        return updateId
    }
}

module.exports = TodoServices