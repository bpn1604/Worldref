import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import { Signup } from './components/Signup';

function App() {
  
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      
    </div>
  );
}

export default App;
