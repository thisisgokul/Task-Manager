import React from "react";
import { TodoInputProps } from "../../src/types";

const TodoInput: React.FC<TodoInputProps> = ({
  inputValue,
  setInputValue,
  handleAddTodo,
  editingTodoId,
}) => {
  return (
    <div className="flex mb-4 justify-center">
      <input
        type="text"
        className="w-full p-3 text-white rounded-3xl bg-zinc-900 border-2 mr-2"
        placeholder="Add a new todo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="text-lg bg-gradient-to-r from-custom-indigo to-custom-blue
         text-white px-7 py-1 rounded"
        onClick={handleAddTodo}
      >
        {/* Button text changes based on editingTodoId */}
        {editingTodoId ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default TodoInput;
