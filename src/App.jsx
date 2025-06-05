import Sidebar from './components/Sidebar/Sidebar'
import React from 'react'
import Dashboard from './pages/Dashboard'
import StudentListPage from './pages/StudentsPage'
import Grades from './pages/Grades'
import Courses from './pages/Courses'
import SettingsPage from './pages/SettingsPage'
import { Routes, Route,useLocation } from 'react-router-dom'
import Login from './pages/Login'


const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return isLoginPage ? (
    <main className='bg-[url(loginBg.png)] bg-cover bg-center min-h-screen h-[100vh] grid place-content-center'>
      <Routes>
        <Route path='/' element={<Login/>}/>
      </Routes>
    </main>
  ) : (
    <main className='grid grid-cols-[50px_1fr] md:grid-cols-[220px_1fr] bg-sidebar text-sidebar-foreground  p-1 md:p-3 h-[100vh]'>
      <Sidebar/>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/students' element={<StudentListPage/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/grades' element={<Grades/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>
      </Routes>
    </main>
  )
}

export default App
