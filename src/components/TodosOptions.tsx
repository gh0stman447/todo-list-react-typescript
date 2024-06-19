import { FC } from 'react';
import { FilterTodosType } from '../constants';

interface TodosOptionsProps {
  filterTodosHandler: (filter: FilterTodosType) => void;
  deleteCompletedTodosHandler: () => void;
  incompleteCount: number;
  hasCompletedTodo: boolean;
  filter: FilterTodosType;
}

const filteringButtons = [
  { label: 'All', filterType: FilterTodosType.all },
  { label: 'Active', filterType: FilterTodosType.active },
  { label: 'Completed', filterType: FilterTodosType.completed },
];

const TodosOptions: FC<TodosOptionsProps> = ({
  filterTodosHandler,
  deleteCompletedTodosHandler,
  hasCompletedTodo,
  incompleteCount,
  filter,
}) => {
  return (
    <div className='flex justify-between items-center text-[#848484] text-xl p-4 border-t border-[#e5e7eb]'>
      <span>{incompleteCount} items left</span>
      <div className='flex gap-8'>
        {filteringButtons.map((btn) => (
          <button
            key={btn.label}
            onClick={() => filterTodosHandler(btn.filterType)}
            className={`hover:text-stone-400 px-2 py-1 ${
              filter === btn.filterType ? 'border border-[#fecaca] rounded-xl' : ''
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>
      {hasCompletedTodo && (
        <button className='hover:text-stone-400' onClick={deleteCompletedTodosHandler}>
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default TodosOptions;
