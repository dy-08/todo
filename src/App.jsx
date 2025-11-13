import './App.css';
import TodoCard from './components/TodoCard/TodoCard';
import TodoHeader from './components/TodoHeader/TodoHeader';
import TodoList from './components/TodoList/TodoList';
import TodoSearch from './components/TodoSearch/TodoSearch';

function App() {
    return (
        <TodoCard>
            <TodoHeader />
            <TodoList />
            <TodoSearch />
        </TodoCard>
    );
}

export default App;
