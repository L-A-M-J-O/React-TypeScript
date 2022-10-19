import './App.css';
import Form from './components/Form';
import Main from './components/Main';
import { Routes, Route, } from 'react-router-dom'
import { useAuth } from './context/context';

function App() {

  const user = useAuth()
  console.log(user)
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/fomr' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
