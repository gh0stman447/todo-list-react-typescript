import { FC, useState, KeyboardEvent } from 'react';
import { GiCircle } from 'react-icons/gi';
import { FiEdit2 } from 'react-icons/fi';
import Todo from '../models/Todo';
import { FcCheckmark } from 'react-icons/fc';
import { useAppDispatch } from '../store/store';
import { editTodoText } from '../store/todoSlice';

interface TodoItemProps {
  todoItem: Todo;
  toggleTodoHandler: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todoItem, toggleTodoHandler }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todoItem.text);

  const handleEdit = () => {
    if (!todoItem.completed) {
      setIsEditing(true);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditedText(todoItem.text);
    }
  };

  const handleSave = () => {
    const trimmedText = editedText.trim();
    if (trimmedText !== '') {
      dispatch(editTodoText({ id: todoItem.id, newText: trimmedText }));
    } else {
      setEditedText(todoItem.text);
    }
    setIsEditing(false);
  };

  return (
    <div className='flex gap-4 items-center py-4 px-2 relative'>
      <button
        className={`z-20 cursor-pointer ${todoItem.completed ? 'text-green-500' : 'text-gray-200'}`}
        onClick={() => toggleTodoHandler(todoItem.id)}
      >
        <GiCircle size={40} />
      </button>

      {todoItem.completed ? (
        <FcCheckmark size={30} className='absolute left-[13px] top-[19px] z-10' />
      ) : null}

      <div className='flex flex-1 items-center gap-2'>
        {isEditing ? (
          <input
            type='text'
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className='flex-1 text-2xl p-1 border rounded focus:outline-none focus:border-blue-500'
            autoFocus
          />
        ) : (
          <>
            <span
              className={`text-2xl text-[#4d4d4d] flex-1 ${
                todoItem.completed ? 'line-through opacity-50' : ''
              }`}
            >
              {todoItem.text}
            </span>
            {!todoItem.completed && (
              <button
                onClick={handleEdit}
                className='text-gray-400 hover:text-gray-600 transition-colors p-2'
              >
                <FiEdit2 size={20} />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;
