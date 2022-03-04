import { useSelector } from 'react-redux';
import './App.css';
import Dashboard from './components/dashboardPage/Dashboard';
import LoginPage from './components/loginPage/Login';
import {selectUser} from './ducks/user'

function App() {
  const user = useSelector(selectUser);

  return (
    <div className="App">
      {user ? <Dashboard/> : <LoginPage />}
    </div>
  );
}

export default App;
