const todoModel = require("./../../db/models/todo");

const getAllTodo = (req, res) => {
  todoModel
    .find({ isDel: false })
    .select("task timeStamp") // tasktimeStamp
    .then((result) => {

        res.status(200).json(result);
  
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getTodoById = (req, res) => {
  const { id } = req.query;
  todoModel
    .findOne({ _id: id, isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

const getCompletedTodos = (req, res) => {
  todoModel
    .find({ isDel: false, isCompleted: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

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

const completeTodo = (req, res) => {
  const { id } = req.params;

  todoModel
    .findOneAndUpdate({ id }, { isCompleted: true }, { new: true })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

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

module.exports = {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  deleteTodo,
updateTodo
};
