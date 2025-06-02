import Sidebar from './components/Sidebar/Sidebar'
import React from 'react'
import Dashboard from './pages/Dashboard'
import StudentListPage from './pages/StudentListPage'
import Grades from './pages/Grades'
import Courses from './pages/Courses'
import SettingsPage from './pages/SettingsPage'
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <main className='grid grid-cols-[50px_1fr] md:grid-cols-[220px_1fr] bg-sidebar text-sidebar-foreground  p-1 md:p-3 h-[100vh]'>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/students' element={<StudentListPage/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/grades' element={<Grades/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>
      </Routes>
    </main>
  )
}

export default App
