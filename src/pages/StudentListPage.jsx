import React, { useState, useEffect, use } from 'react'
import UserGreeting from '@/components/Dashboard/UserGreeting';
import { getAllStudents } from '@/services/AllApi';
import TableData from '@/components/studentPage/TableData';


const StudentListPage = () => {
  const [userData, setUserData] = useState([]);
  const headerData = ['Student ID', 'Name', 'Email', 'Course', 'Status'];

  useEffect(() => {
    fetchUserData()
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await getAllStudents();
      setUserData(response.data);
      console.log(response.data)
    } catch (error) {
      console.log("Error Fetchimg User Data", error.message);
    }
  }

  return (
    <main className=' m-1 px-2 py-1.5 bg-background rounded-2xl border-2 border-border h-[calc(100vh-32px)]'>
      <section className='px-6 mt-8'>
        <UserGreeting />
      </section>
      <section className=' px-6 my-6 overflow-y-auto h-[82%]'>
        <h1 className='mb-2'>All Students</h1>
        <TableData HeadData={headerData} rowData={userData} />
      </section>
    </main>
  )
}

export default StudentListPage
