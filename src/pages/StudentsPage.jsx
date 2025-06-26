import React, { useState, useEffect} from 'react'
import UserGreeting from '@/components/common/UserGreeting';
import { getAllStudents } from '@/services/AllApi';
import StudentTable from '@/components/studentPage/StudentTable';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Users, } from 'lucide-react';
import AddStudent from '@/components/studentPage/AddStudent';
import TableSkeleton from '@/components/common/TableSkelton';

const StudentListPage = () => {
  const [studentData, setStudentData] = useState([]);
  const headerData = ['Student ID', 'Name', 'Email', 'Course', 'Status',""];
  const [pageReload, setPageReload] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetchStudentData()
  }, [pageReload]);

  const fetchStudentData = async () => {
    try {
      const response = await getAllStudents();
      setStudentData(response.data);
      setIsLoading(false)
    } catch (error) {
      console.log("Error Fetching Student Data", error.message);
    }
  }

  return (
    <main className=' m-1 px-2 py-1.5 bg-background rounded-2xl border-2 border-border h-[calc(100vh-32px)]'>
      <section className='px-6 mt-5'>
        <UserGreeting />
      </section>
      <div className='flex justify-between flex-wrap gap-2 items-center mt-6 px-7 pb-2'>
        <h2 className="md:text-[20px] text-sm mr-auto font-semibold text-slate-900  flex items-center gap-2 ">
          <Users className="md:size-5.5 size-5 text-primary" />
          All Students
        </h2>
        <AddStudent setPageReload={setPageReload} />
      </div>
      <ScrollArea className={'h-[75%]'}>
        {isLoading
          ? (<div className=' px-6'>
            <TableSkeleton  headerSkeltonData={headerData}/>
          </div>)
          : (
            <div className=' px-6'>
              <StudentTable setPageReload={setPageReload} HeadData={headerData} rowData={studentData} />
            </div>
          )}
      </ScrollArea>

    </main>
  )
}

export default StudentListPage
