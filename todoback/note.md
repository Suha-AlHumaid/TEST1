## Error 1:
* sh: nodemon: command not found

### Solution:
```
npm nodemon
```
## Error 2: 
* Error: Cannot find module '../db'
```
require("../db");
```

### Solution:
```
require("./db");
```
## Error 3:
* Error: Cannot find module 'mongoose' 

### Solution:
```
npm i mongoose
```

## Error 4:
* Error: Cannot find module './../../db/models/todos'
```
const todoModel = require("./../../db/models/todos");
```

### Solution:
```
const todoModel = require("./../../db/models/todo");
```

## Error 5:
* Error: Cannot find module 'mongose'
```
const mongoose = require("mongose");
```
### Solution:
```
const mongoose = require("mongoose");
```

## Error 6:
* TypeError: mongoose.module is not a function
```
const todoModel = mongoose.module("Todo", todoSchema);
                           ^
```

### Solution:
```
const todoModel = mongoose.model("Todo", todoSchema);
```

## Error 7:
* Error: Route.get() requires a callback function but got a [object Undefined]
```
// missing s in module.exports
module.export = {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  deleteTodo, 
};
```

### Solution:
```
module.exports = {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  deleteTodo,
};

```
## Error 8:
* Error: Route.get() requires a callback function but got a [object Undefined]
```
//missing export updateTodo in controllers file 
module.exports = {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  deleteTodo,
};

```

### Solution:
```
module.exports = {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  deleteTodo,
  updateTodo,
};
```
## Error 9:
* ReferenceError: morgan is not defined
```
// index.js file 
//missing import morgan
```

### Solution:
```
// import morgan to index.js
const morgan = require("morgan")
```

## Error 10:
* Error: listen EADDRINUSE: address already in use 4000;
```
PORT=4000;
```
### Solution:
```
PORT=4000
```
## Error 11:
//missing dotenv in db index.js

### Solution:
```
require("dotenv").config();
```

## Error 12:
* todoRouter.get("/todos", getAllTodo); 
no response

### Solution:
```
```

## Error 13:
*todo schema type of task will be string not boolean

### Solution:
```
const todoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  isDel: { type: Boolean, default: false },
  isCompleted: { type: Boolean, default: false },
  timeStamp: { type: Date, default: new Date() },
});
```

## Error 14:
* missing app.use(express.json()); in index.js
### Solution:
index.js
```
app.use(express.json()); 
```

## Error 3:
```
DB_URL=mongodb+srv://Suha:1111@cluster0.almml.mongodb.net/DB_TODO_TEST?retryWrites=true&w=majority
```
### Solution:
```
DB_URI=mongodb+srv://Suha:1111@cluster0.almml.mongodb.net/DB_TODO_TEST?retryWrites=true&w=majority
```

## Error 3:
```

const createTodo = (req, res) => {
  const todo = req.body.todo;

  const newTodo = new todoModel({
   task: todo
  });

  newTodo
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
```

### Solution:
```

const createTodo = (req, res) => {
  const todo = req.body.todo;

  const newTodo = new todoModel({
todo
  });

  newTodo
    .save()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
```

## Error 3:
```
todoRouter.put("/todo", updateTodo);
```

### Solution:
```
todoRouter.put("/todo/:id", updateTodo);
```

### error :
```
const updateTodo = (req, res) => {
  const { id } = req.params;
  const newTask = req.body.task;

  todoModel
    .findOneAndUpdate({ _id: id }, { task: newTask }, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
```

### Solution:
```
const updateTodo = (req, res) => {
  const { id } = req.params;
  const newTask = req.body.task;

  todoModel
    .findByIdAndUpdate({ _id: id }, { task: newTask }, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

```

### Error  :
```
const deleteTodo = (req, res) => {
  const { id } = req.params;

  todoModel
    .findOneAndUpdate({ _id: id }, { isDel: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
````
### solution 

```
const deleteTodo = (req, res) => {
  const { id } = req.params;

  todoModel
    .findByIdAndUpdate({ _id: id }, { isDel: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
````
