import { Counter } from "../../src/types";

interface TodoHeaderProps {
  counter: Counter;
}

const TodoHeader: React.FC<TodoHeaderProps> = ({ counter }) => {
  return (
    <div className="w-full rounded-xl mb-4 flex justify-between items-center bg-gradient-to-r from-custom-yellow to-custom-pink shadow-2xl p-4">
      <h1 className="text-4xl font-bold text-center">Todo List</h1>
      <div className="flex flex-col text-zinc-900">
        <h2 className="text-2xl font-semibold font-mono">No of Times</h2>
        <h3 className="text-blue-950 font-bold">
          Add: {counter.addCount}, Edit: {counter.updateCount}
        </h3>
      </div>
    </div>
  );
};

export default TodoHeader;
