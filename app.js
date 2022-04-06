const express = require('express')
const path = require('path')

const app = express()
const port = 3000

const MainManager = require("./routes/manager")
const tasks = require("./routes/history")
const res = require('express/lib/response')


//routes
app.use("/api/v1/tasks", tasks)

app.use(express.static(path.join(__dirname, 'public')))
app.use(MainManager)
 
//middleware
app.use(express.json())
res.send

app.use((req, res, next) =>{
  res.status(404).send('<h1>Page not Found</h1>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})