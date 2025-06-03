import React, { useState, useEffect} from 'react'
import UserGreeting from '@/components/Dashboard/UserGreeting';
import { getAllCourses } from '@/services/AllApi';
import CourseTable from '@/components/coursesPage/CourseTable';
import { ScrollArea } from '@/components/ui/scroll-area';
import { BookCopy} from 'lucide-react';

const Courses = () => {
  const [CourseData, setCourseData] = useState([]);
  const headerData = ['Course ID', 'Name', 'Duration', 'Instructor', 'Description'];
  const [pageReload, setPageReload] = useState(false)
  useEffect(() => {
    fetchCourseData()
  }, [pageReload]);

  const fetchCourseData = async () => {
    try {
      const response = await getAllCourses();
      setCourseData(response.data);
      console.log(response.data)
    } catch (error) {
      console.log("Error Fetchimg Courses Data", error.message);
    }
  }
  return (
    <main className=' m-1 px-2 py-1.5 bg-background rounded-2xl border-2 border-border h-[calc(100vh-32px)]'>
      <section className='px-6 mt-8'>
        <UserGreeting />
      </section>
      <h2 className="text-xl px-6 pb-1 font-semibold text-slate-900 mt-6 flex items-center gap-2 ">
        <BookCopy className="w-5 h-5 text-primary" />
        All Courses
      </h2>
      <ScrollArea className={'h-[77%]'}>
        <div className=' px-6'>
          <CourseTable setPageReload={setPageReload} HeadData={headerData} rowData={CourseData} />
        </div>
      </ScrollArea>
    </main>
  )
}

export default Courses
