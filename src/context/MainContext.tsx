import React, { useEffect, useState } from "react";
import { TodoList } from "../common/data";
import { ITodoList } from "../common/types";

interface ITodoDataContext {
  todos: ITodoList[];
}

export const TodoDataContext = React.createContext<ITodoDataContext | null>(
  null
);

interface ITodoProviderProps {
  children: React.ReactNode;
}

const TodoProvider: React.FC<ITodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<ITodoList[]>([]);

  useEffect(() => {
    if (TodoList.length > 0) {
      setTodos(TodoList);
    }
  }, [todos]);

  return (
    <TodoDataContext.Provider value={{ todos: todos }}>
      <div>{children}</div>
    </TodoDataContext.Provider>
  );
};

export default TodoProvider;
