import { Todo } from "../models/todo.model.js";

const userTodos = async(req, res) => {
    const { title, description } = req.body

    const todo = await Todo.create({
        title,
        description,
    })

    return res.status(200).json({
        message: "todo created successfully"
    })
}

const getTodos = async(req, res) => {
    const { title, description } = req.body

    try {
        const allTodos = await Todo.find()
        
        if(!allTodos){
            console.log("no todo found")
        }
        
        return res.status(200).json({
            message: "thats ur todos",
            allTodos
        })

        
    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch todos",
            error: error.message,
        })
    }
}

const updateTodos = async(req, res) => {
    const { todoId } = req.params
    const { done } = req.body

    try {
        const todo = await Todo.findByIdAndUpdate(
            todoId,
            {done: done},
            {new: true}
        )
    
        if(!todo){
            return res.status(400).json({
                msg: "todo not found"
            })
        }
    
        return res.status(200).json({
            message: "Your todo is marked as done",
            todo
        })
    } catch (error) {
        res.status(401).json({
            message: "something went wrong to upate ur todo",
            error: error.message
        })
    }
}
export { 
    userTodos,
    getTodos,
    updateTodos
 }