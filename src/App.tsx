import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <main>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <ToastContainer />
    </main>
  )
}

export default App
