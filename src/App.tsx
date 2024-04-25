import { useState } from 'react';
import Heading from './components/Heading';
import TodoPage from './components/TodoPage';
import Todo from './models/Todo';
import PageLayar from './components/PageLayar';
import {filterTodos} from './utils/todoUtils';

export enum FilterTodosType {
  all = 'all',
  active = 'active',
  completed = 'completed',
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterTodosType>(FilterTodosType.all);
  const [incompleteCount, setIncompleteCount] = useState<number>(0);

  const hasCompletedTodo = todos.some((todo) => todo.completed === true);

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const updateIncompletedCount = (todosList: Todo[]) => {
    const count = todosList.filter((todo) => !todo.completed).length;
    setIncompleteCount(count);
  };

  const filterTodosHandler = (filter: FilterTodosType) => {
    setFilter(filter);
  };
  const addTodoHandler = (newTodo: Todo) => {
    setTodos([...todos, newTodo]);
    setIncompleteCount((count) => count + 1);
  };

  const toggleTodoHandler = (id: number) => {
    const updatedTodosList = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodosList);
    updateIncompletedCount(updatedTodosList);
  };

  return (
    <div className='max-w-[768px] flex flex-col justify-center items-center h-[100vh] mx-auto px-4 py-4'>
      <Heading title='todos' />
      <TodoPage
        todoList={filterTodos(todos, filter)}
        addTodo={addTodoHandler}
        toggleTodoHandler={toggleTodoHandler}
        filterTodosHandler={filterTodosHandler}
        filter={filter}
        incompleteCount={incompleteCount}
        deleteCompletedTodosHandler={deleteCompletedTodosHandler}
        hasCompletedTodo={hasCompletedTodo}
      />
      <PageLayar />
    </div>
  );
}

export default App;
