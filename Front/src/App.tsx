import './App.css'
import { Login } from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register';
import IndexView from "./views/IndexView/IndexView";
function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<IndexView />}/>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
