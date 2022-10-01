import { Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage/MainPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import TaskPage from './pages/TaskPage/TaskPage';
import AuthPage from './pages/AuthPage/AuthPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}></Route>
        <Route path='/login' element={<AuthPage />}></Route>
        <Route path='/register' element={<RegisterPage />}></Route>
        <Route path='/task' element={<TaskPage/>}></Route>
        <Route path='/profile' element={<ProfilePage/>}></Route>
      </Routes>
    </>
  );
}

export default App;
