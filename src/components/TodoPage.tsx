import React, { FC, useState } from 'react';
import AddTodoInput from './AddTodoInput';
import Todo from '../models/Todo';
import TodoList from './TodoList';
import TodosOptions from './TodosOptions';
import { Accordion, AccordionItem, AccordionTrigger } from './ui/accordion';
import { FilterTodosType } from '../constants';

interface TodoListProps {
  todoList: Todo[];
  addTodo: (newTodo: Todo) => void;
  toggleTodoHandler: (id: number) => void;
  filterTodosHandler: (filter: FilterTodosType) => void;
  deleteCompletedTodosHandler: () => void;
  incompleteCount: number;
  filter: FilterTodosType;
  hasCompletedTodo: boolean;
}

const TodoPage: FC<TodoListProps> = ({
  todoList,
  addTodo: addTodoHandler,
  toggleTodoHandler,
  filterTodosHandler,
  incompleteCount,
  deleteCompletedTodosHandler,
  filter,
  hasCompletedTodo,
}) => {
  return (
    <div className='w-full shadow-md bg-white z-20 border overflow-y-auto'>
      <Accordion type='single' collapsible>
        <AccordionItem value='item-1'>
          <div className='flex px-4'>
            <AccordionTrigger></AccordionTrigger>
            <AddTodoInput addTodo={addTodoHandler} />
          </div>
          <TodoList todoList={todoList} toggleTodoHandler={toggleTodoHandler} />
          <TodosOptions
            filter={filter}
            filterTodosHandler={filterTodosHandler}
            deleteCompletedTodosHandler={deleteCompletedTodosHandler}
            incompleteCount={incompleteCount}
            hasCompletedTodo={hasCompletedTodo}
          />
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default TodoPage;
