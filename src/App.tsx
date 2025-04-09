import { Provider } from 'react-redux';
import { store } from './store/store';
import Heading from './components/Heading';
import TodoPage from './components/TodoPage';
import PageLayar from './components/PageLayar';

function App() {
  return (
    <Provider store={store}>
      <div className='max-w-[768px] flex flex-col justify-center items-center h-[100vh] mx-auto px-4 py-4'>
        <Heading title='todos' />
        <TodoPage />
        <PageLayar />
      </div>
    </Provider>
  );
}

export default App;
