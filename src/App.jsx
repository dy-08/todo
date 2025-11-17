import { useState } from 'react';
import './App.css';
import TodoCard from './components/TodoCard/TodoCard';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeContext value={{ isDark, setIsDark }}>
      <TodoCard />
    </ThemeContext>
  );
}

export default App;
