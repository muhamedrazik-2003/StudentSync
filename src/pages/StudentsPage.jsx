import React, { useState, useEffect, use } from 'react'
import UserGreeting from '@/components/Dashboard/UserGreeting';
import { getAllStudents } from '@/services/AllApi';
import StudentTable from '@/components/studentPage/StudentTable';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Users } from 'lucide-react';

const StudentListPage = () => {
  const [userData, setUserData] = useState([]);
  const headerData = ['Student ID', 'Name', 'Email', 'Course', 'Status'];
  const [pageReload, setPageReload] = useState(false)
  useEffect(() => {
    fetchUserData()
  }, [pageReload]);

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
      <h2 className="text-xl px-6 pb-1 font-semibold text-slate-900 mt-6 flex items-center gap-2 ">
        <Users className="w-5 h-5 text-primary" />
        All Students
      </h2>
      <ScrollArea className={'h-[77%]'}>
        <div className=' px-6'>
          <StudentTable setPageReload={setPageReload} HeadData={headerData} rowData={userData} />
        </div>
      </ScrollArea>
      
    </main>
  )
}

export default StudentListPage
