import './App.css'
import { Home } from './pages/Index';
import { Login } from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register';
function App() {


  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
