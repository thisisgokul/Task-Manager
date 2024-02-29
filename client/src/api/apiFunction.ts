// apiFunctions.ts

import axios from "axios";
import { Todo, Counter } from "../../src/types"; // Importing Todo and Counter interfaces

export const fetchTodos = async (setTodos: React.Dispatch<React.SetStateAction<Todo[]>>, setLoading: React.Dispatch<React.SetStateAction<boolean>>) => {
  try {
    setLoading(true); // Start loading
    const { data } = await axios.get<Todo[]>("/api/tasks"); // Fetch todos
    setTodos(data); // Set todos
    setLoading(false); // Stop loading
  } catch (error) {
    console.error("Error fetching todos:", error); // Log error if fetching todos fails
  }
};

export const fetchCounter = async (setCounter: React.Dispatch<React.SetStateAction<Counter>>) => {
  try {
    const { data } = await axios.get<Counter>("/api/counter"); // Fetch counter
    setCounter(data); // Set counter
  } catch (error) {
    console.error("Error fetching counter:", error); // Log error if fetching counter fails
  }
};

export const handleAddTodo = async (inputValue: string, editingTodoId: string | null, fetchTodos: () => void, fetchCounter: () => void, setInputValue: React.Dispatch<React.SetStateAction<string>>, toast: any) => {
  try {
    if (inputValue.trim() !== "") {
      if (editingTodoId) {
        await axios.put(`/api/tasks/${editingTodoId}`, { task: inputValue }); // Update todo
        setInputValue("");
        fetchCounter(); // Fetch counter after updating todo
        toast.success("Task updated successfully");
      } else {
        await axios.post("/api/create-tasks", { task: inputValue }); // Create new todo
        setInputValue("");
        fetchCounter(); // Fetch counter after creating todo
        toast.success("Task added successfully");
      }
      fetchTodos(); // Fetch todos after adding/updating todo
    }
  } catch (error) {
    console.error("Error adding/updating todo:", error); // Log error if adding/updating todo fails
  }
};

export const handleDeleteTodo = async (id: string, fetchTodos: () => void, toast: any) => {
  try {
    await axios.delete(`/api/tasks/${id}`); // Delete todo
    fetchTodos(); // Fetch todos after deleting todo
    toast.error("Task Deleted");
  } catch (error) {
    console.error("Error deleting todo:", error); // Log error if deleting todo fails
  }
};

export const handleEditTodo = (id: string, task: string, setInputValue: React.Dispatch<React.SetStateAction<string>>, setEditingTodoId: React.Dispatch<React.SetStateAction<string | null>>) => {
  setInputValue(task); // Set input value to the task being edited
  setEditingTodoId(id); // Set editing todo ID
};
