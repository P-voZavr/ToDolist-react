import User from "../models/User-model.js";

async function addTodosById(id, todo) {
  try {
    const user = await User.findById(id);
    const newTodo = user.Todos.create(todo);
    user.Todos.push(newTodo);
    await user.save();
    return newTodo;
  } catch (error) {
    console.log(error);
  }
}

async function getTodosById(id) {
  try {
    const user = await User.findById(id);
    return user.Todos;
  } catch (error) {
    console.log(error);
  }
}

async function changeTodosById(userid, todoid, newtodo) {
  try {
    const user = await User.findById(userid);
    const todo = user.Todos.id(todoid);
    todo.text = newtodo.text;
    todo.checkboxvalue = newtodo.checkboxvalue;
    return await user.save();
  } catch (error) {
    console.log(error);
  }
}

async function deleteTodosById(userid, todoid) {
  try {
    const user = await User.findById(userid);

    const todo = user.Todos.id(todoid);

    user.Todos.remove(todo);

    await user.save();
    return todo;
  } catch (error) {
    console.log(error);
  }
}

export { addTodosById, getTodosById, changeTodosById, deleteTodosById };
