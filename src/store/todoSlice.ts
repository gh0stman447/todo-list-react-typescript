import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Todo from '../models/Todo';
import { FilterTodosType } from '../constants';

interface TodoState {
  todos: Todo[];
  filter: FilterTodosType;
  incompleteCount: number;
}

const initialState: TodoState = {
  todos: [],
  filter: FilterTodosType.all,
  incompleteCount: 0,
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
      state.incompleteCount++;
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        state.incompleteCount += todo.completed ? -1 : 1;
      }
    },
    deleteCompleted: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    setFilter: (state, action: PayloadAction<FilterTodosType>) => {
      state.filter = action.payload;
    },
  },
});

export const { addTodo, toggleTodo, deleteCompleted, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
