import React, { useState, useEffect } from 'react'
import UserGreeting from '@/components/common/UserGreeting';
import { getAllCourses } from '@/services/AllApi';
import CourseTable from '@/components/coursesPage/CourseTable';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BookCopy } from 'lucide-react';
import AddCourse from '@/components/coursesPage/AddCourse';
import TableSkeleton from '@/components/common/TableSkelton';

const Courses = () => {
  const [CourseData, setCourseData] = useState([]);
  const headerData = ['Course ID', 'Name', 'Duration', 'Instructor', 'Description'];
  const [pageReload, setPageReload] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetchCourseData()
  }, [pageReload]);

  const fetchCourseData = async () => {
    try {
      const response = await getAllCourses();
      setCourseData(response.data);
      console.log(response.data)
      setIsLoading(false)
    } catch (error) {
      console.log("Error Fetchimg Courses Data", error.message);
    }
  }
  return (
    <main className=' m-1 px-2 py-1.5 bg-background rounded-2xl border-2 border-border h-[calc(100vh-32px)]'>
      <section className='px-6 mt-5'>
        <UserGreeting />
      </section>
      <div className='flex justify-end items-center mt-6 px-7 pb-2'>
        <h2 className="text-[20px]  mr-auto font-semibold text-slate-900  flex items-center gap-2 ">
          <BookCopy className="size-5.5 text-primary" />
          All Courses
        </h2>
        <AddCourse setPageReload={setPageReload} />
      </div>
      <ScrollArea className={'h-[75%]'}>
        {isLoading
          ? (<div className=' px-6'>
            <TableSkeleton headerSkeltonData={headerData} />
          </div>)
          : (
            <div className=' px-6'>
              <CourseTable setPageReload={setPageReload} HeadData={headerData} rowData={CourseData} />
            </div>
          )}

      </ScrollArea>
    </main>
  )
}

export default Courses
