import React, { FC } from 'react';
import { GiCircle } from 'react-icons/gi';
import Todo from '../models/Todo';
import { FcCheckmark } from 'react-icons/fc';

interface TodoItemProps {
  todoItem: Todo;
  toggleTodoHandler: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todoItem, toggleTodoHandler }) => {
  return (
    <div className='flex gap-4 items-center py-4 px-2 relative'>
      <button
        className={`z-20 cursor-pointer ${todoItem.completed ? 'text-green-500' : 'text-gray-200'}`}
        onClick={() => toggleTodoHandler(todoItem.id)}
      >
        <GiCircle size={40} />
      </button>

      {todoItem.completed ? (
        <FcCheckmark size={30} className='absolute left-[13px] top-[19px] z-10 ' />
      ) : (
        ''
      )}
      <span
        className={`text-2xl text-[#4d4d4d] ${todoItem.completed ? 'line-through opacity-50' : ''}`}
      >
        {todoItem.text}
      </span>
    </div>
  );
};

export default TodoItem;
