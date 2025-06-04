import React , {useState, useEffect} from 'react'
import UserGreeting from '@/components/Dashboard/UserGreeting'
import { SectionCards } from '@/components/Dashboard/SectionCards'
// import GradeChart from '@/components/ui/GradeChart'
import StudentsPerCourseChart from '@/components/Charts/StudentsPerCourseChart'
import StudentGradeAverageChart from '@/components/Charts/StudentGradeAverageChart'
import { getAllGrades } from '@/services/AllApi'

const Dashboard = () => {
  const [gradeData, setGradeData] = useState([]);
    const [pageReload, setPageReload] = useState(false)
    useEffect(() => {
      fetchGradeData()
    }, [pageReload]);
  
    const fetchGradeData = async () => {
      try {
        const response = await getAllGrades();
        setGradeData(response.data);
        console.log(response.data)
      } catch (error) {
        console.log("Error Fetching Grades Data", error.message);
      }
    }
  return (
    <main className=' m-1 px-2 py-1.5 bg-background rounded-2xl border-2 border-border'>
      <section className='px-6 mt-8'>
        <UserGreeting />
      </section>
      <section className='mt-6'>
        <SectionCards />
      </section>
      <section className='mt-5 px-6 grid grid-cols-2 md:grid-cols-2 gap-5'>
        <StudentsPerCourseChart students={gradeData}/>
        <StudentGradeAverageChart studentData={gradeData}/>
      </section>
    </main>
  )
}

export default Dashboard
