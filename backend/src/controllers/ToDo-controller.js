import { validateAccessToken } from "../services/Token-service.js";
import {
  getTodosById,
  addTodosById,
  deleteTodosById,
  changeTodosById,
} from "../services/ToDo-service.js";

async function getTodos(req, res) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    const userData_id = await validateAccessToken(token);
    if (!userData_id) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const todos = await getTodosById(userData_id.id);

    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
}

async function addTodo(req, res) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    const userData_id = await validateAccessToken(token);
    if (!userData_id) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const todo = req.body;
    if (!todo) {
      console.log("No todo provided");
      return res.status(400).json({ message: "No todo provided" });
    }
    if (!todo.text) {
      console.log("No todo text provided");
      return res.status(400).json({ message: "No todo text provided" });
    }
    if (!todo.checkboxvalue.toString()) {
      console.log("No todo checkboxvalue provided");
      return res
        .status(400)
        .json({ message: "No todo checkboxvalue provided" });
    }
    const todos = await addTodosById(userData_id.id, todo);
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
}

async function deleteTodo(req, res) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    const userData_id = await validateAccessToken(token);
    if (!userData_id) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const todoId = req.params.id;
    const todos = await deleteTodosById(userData_id.id, todoId);
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
}

async function updateTodo(req, res) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const token = authHeader.split(" ")[1];

    const userData_id = await validateAccessToken(token);
    if (!userData_id) {
      return res.status(401).json({ message: "Invalid token" });
    }

    const todo = req.body;
    if (!todo) {
      return res.status(400).json({ message: "No todo provided" });
    }
    if (!todo.text) {
      return res.status(400).json({ message: "No todo text provided" });
    }
    if (!todo.checkboxvalue.toString()) {
      return res
        .status(400)
        .json({ message: "No todo checkboxvalue provided" });
    }

    const todoId = req.params.id;

    const todos = await changeTodosById(userData_id.id, todoId, todo);
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
}

export { getTodos, addTodo, deleteTodo, updateTodo };
