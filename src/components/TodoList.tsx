import React, { FC } from 'react';
import TodoItem from './TodoItem';
import Todo from '../models/Todo';
import { AccordionContent } from './ui/accordion';

interface TodoListProps {
  todoList: Todo[];
  toggleTodoHandler: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todoList, toggleTodoHandler }) => {
  return (
    <div className='divide-y border-t border-t-slate-200'>
      {todoList.map((todo) => (
        <AccordionContent key={todo.id}>
          <TodoItem todoItem={todo} toggleTodoHandler={toggleTodoHandler} />
        </AccordionContent>
      ))}
    </div>
  );
};

export default TodoList;
