import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { TodoListProps } from "../../src/types";

const TodoList: React.FC<TodoListProps> = ({
  todos,
  editingTodoId,
  handleAddTodo,
  handleEditTodo,
  handleDeleteTodo,
}) => {
  // Check if todos is an array
  if (!Array.isArray(todos) || todos.length === 0) {
    return <p className="text-center text-white">No todos available</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo._id}
          className="flex flex-col bg-gradient-to-r from-custom-green-light 
          rounded-2xl to-custom-green mt-2 px-4 py-2"
        >
          <span className="break-words font-mono text-2xl text-gray-50">
            {todo.task}
          </span>
          <div className="flex gap-2 items-center self-end mt-2">
            <button
              className="text-white p-1 rounded-lg flex text-lg btnHover
               bg-custom-green-light font-semibold items-center"
              onClick={() => {
                if (editingTodoId === todo._id) {
                  handleAddTodo(); // If editing, update instead of edit
                } else {
                  handleEditTodo(todo._id, todo.task);
                }
              }}
            >
              {/* Button text changes based on editingTodoId */}
              <FaEdit /> {editingTodoId === todo._id ? "Update" : "Edit"}
            </button>
            <button
              className="text-red-600 bg-white p-1 rounded-lg text-xl btnHover
               flex items-center"
              onClick={() => handleDeleteTodo(todo._id)}
            >
              <FaTrash /> Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

