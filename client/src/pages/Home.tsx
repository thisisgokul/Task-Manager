import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoList from "../Components/TodoList";
import TodoInput from "../Components/TodoInput";
import Loader from "../Components/Loader"; 
import { Todo, Counter } from "../../src/types"; 
import { toast } from "react-toastify";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [editingTodoId, setEditingTodoId] = useState<string | null>(null); 
  const [counter, setCounter] = useState<Counter>({
    addCount: 0,
    updateCount: 0,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTodos(); // Fetch todos on component mount
    fetchCounter(); // Fetch counter on component mount
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get<Todo[]>("/api/tasks"); // Fetch todos
      setTodos(data); // Set todos
      setLoading(false); // Stop loading
    } catch (error) {
      console.error("Error fetching todos:", error); 
    }
  };

  const fetchCounter = async () => {
    try {
      const { data } = await axios.get("/api/counter"); // Fetch counter
      setCounter(data); // Set counter
    } catch (error) {
      console.error("Error fetching counter:", error); 
    }
  };

  const handleAddTodo = async () => {
    try {
      if (inputValue.trim() !== "") {
        if (editingTodoId) {
          await axios.put(`/api/tasks/${editingTodoId}`, { task: inputValue }); // Update todo
          setEditingTodoId(null); // Reset editing state
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
      console.error("Error adding/updating todo:", error);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await axios.delete(`/api/tasks/${id}`); // Delete todo
      fetchTodos(); // Fetch todos after deleting todo
      toast.error("Task Deleted");
    } catch (error) {
      console.error("Error deleting todo:", error); 
    }
  };

  const handleEditTodo = (id: string, task: string) => {
    setInputValue(task); // Set input value to the task being edited
    setEditingTodoId(id); // Set editing todo ID
  };

  return (
    <section className="padding">
      <div className="max-w-3xl mx-auto mt-8 p-4 rounded-xl bg-zinc-700 shadow-xl">
        <div
          className="w-full rounded-xl mb-4 flex justify-between items-center bg-gradient-to-r
         from-custom-yellow to-custom-pink shadow-2xl p-4"
        >
          <h1 className="text-4xl font-bold text-center">Task Manager</h1>
          <div className="flex flex-col text-zinc-900">
            <h2 className="text-3xl font-semibold font-mono">No of Times</h2>
            <h3 className="text-white text-lg font-bold">
              Added: {counter.addCount}, Edited: {counter.updateCount}
            </h3>
          </div>
        </div>

        <TodoInput
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleAddTodo={handleAddTodo}
          editingTodoId={editingTodoId}
        />
        {/* Conditionally render loader if loading is true */}
        {loading ? (
          <div className="flex justify-center flex-col items-center">
            <Loader />
            <p className="text-white">Loading...</p>
          </div>
        ) : (
          <TodoList
            todos={todos}
            editingTodoId={editingTodoId}
            handleAddTodo={handleAddTodo}
            handleEditTodo={handleEditTodo}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </div>
    </section>
  );
};

export default Home;
