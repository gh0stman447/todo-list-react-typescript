import React, { FC } from 'react';
import AddTodoInput from './AddTodoInput';
import TodoList from './TodoList';
import TodosOptions from './TodosOptions';
import { Accordion, AccordionItem, AccordionTrigger } from './ui/accordion';
import { useAppSelector, useAppDispatch } from '../store/store';
import { addTodo, toggleTodo, deleteCompleted, setFilter } from '../store/todoSlice';
import Todo from '../models/Todo';
import { FilterTodosType } from '../constants';

const TodoPage: FC = () => {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todos.todos);
  const filter = useAppSelector((state) => state.todos.filter);
  const incompleteCount = useAppSelector((state) => state.todos.incompleteCount);
  const hasCompletedTodo = todos.some((todo) => todo.completed);

  const handleAddTodo = (newTodo: Todo) => {
    dispatch(addTodo(newTodo));
  };

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id));
  };

  const handleFilterTodos = (newFilter: FilterTodosType) => {
    dispatch(setFilter(newFilter));
  };

  const handleDeleteCompleted = () => {
    dispatch(deleteCompleted());
  };

  const filteredTodos = todos.filter((todo) => {
    switch (filter) {
      case FilterTodosType.active:
        return !todo.completed;
      case FilterTodosType.completed:
        return todo.completed;
      default:
        return true;
    }
  });

  return (
    <div className='w-full shadow-md bg-white z-20 border overflow-y-auto'>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <div className='flex px-4'>
            <AccordionTrigger></AccordionTrigger>
            <AddTodoInput addTodo={handleAddTodo} />
          </div>
          <TodoList todoList={filteredTodos} toggleTodoHandler={handleToggleTodo} />
          <TodosOptions
            filter={filter}
            filterTodosHandler={handleFilterTodos}
            deleteCompletedTodosHandler={handleDeleteCompleted}
            incompleteCount={incompleteCount}
            hasCompletedTodo={hasCompletedTodo}
          />
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default TodoPage;
