import { FilterTodosType } from '../App';
import Todo from '../models/Todo';

export const filterTodos = (todos: Todo[], filter: FilterTodosType): Todo[] => {
  switch (filter) {
    case FilterTodosType.all:
      return todos;
    case FilterTodosType.active:
      return todos.filter((todo) => !todo.completed);
    case FilterTodosType.completed:
      return todos.filter((todo) => todo.completed);
    default:
      return todos;
  }
};
