import AppRouter from '@/router/Router';
import './App.css';

function App() {
  return (
    <div>
      <AppRouter />
      <h1> {location.pathname}</h1>
    </div>
  );
}

export default App;
