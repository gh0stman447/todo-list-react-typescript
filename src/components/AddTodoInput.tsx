import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import Todo from '../models/Todo';

interface AddTodoInputProps {
  addTodo: (newTodo: Todo) => void;
}
const initState = {
  completed: false,
  text: '',
};

const AddTodoInput: FC<AddTodoInputProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<{ completed: boolean; text: string }>(initState);
  
  const todoIsNotEmpty = newTodo.text.trim() !== '';

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoIsNotEmpty) addTodo({ ...newTodo, id: Date.now() });
    setNewTodo(initState);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewTodo({ ...newTodo, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-grow items-center gap-12 px-4 py-4'>
      <input
        onChange={handleChange}
        type='text'
        placeholder='What needs to be done?'
        name='text'
        className='w-full h-10 p-3 text-[##e8e8e8] italic px-4 text-2xl'
        value={newTodo.text}
      />
      {todoIsNotEmpty ? (
        <button
          type='submit'
          className='bg-[#dedede] py-2 px-4 rounded-lg h-fit font-serif text-lg'
        >
          Добавить
        </button>
      ) : null}
    </form>
  );
};

export default AddTodoInput;
