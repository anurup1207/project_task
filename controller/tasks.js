

const getAllTask= (req,res)=>{
    res.send("get all items")
    
}
const getTask= (req,res)=>{
    res.json({id: req.params.id})
}
const createTask= (req,res)=>{
    
    res.json(req.body)
    
}
const updateTask= (req,res)=>{
    res.send("Update Task ")
}
const deleteTask= (req,res)=>{
    res.send("Delete Task")
}

module.exports= {getAllTask, getTask, createTask, updateTask,deleteTask}