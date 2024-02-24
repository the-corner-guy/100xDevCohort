const express = require("express")
const app = express()
const port  = 1010

let tasks = ['Taks1','Taks2', 'Task 3']

app.get('/', (req, res)=>{
    res.send(tasks)
})

app.use(express.json())

app.post('/update-task',(req, res)=>{
    console.log(req.body)
    tasks = tasks.concat(req.body.UpdatedTask)
    res.send(tasks)
    
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })