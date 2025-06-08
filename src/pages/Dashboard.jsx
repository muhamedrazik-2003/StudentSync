import React, { useState, useEffect } from 'react'
import UserGreeting from '@/components/common/UserGreeting'
import { SectionCards } from '@/components/Dashboard/SectionCards'
import StudentsPerCourseChart from '@/components/Charts/StudentsPerCourseChart'
import StudentGradeAverageChart from '@/components/Charts/StudentGradeAverageChart'
import { getAllGrades } from '@/services/AllApi'
import { ScrollArea } from '@/components/ui/scroll-area'
import ChartSkelton from '@/components/common/ChartSkelton'

const Dashboard = () => {
  const [gradeData, setGradeData] = useState([]);
  const [pageReload, setPageReload] = useState(false)
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetchGradeData()
  }, [pageReload]);

  const fetchGradeData = async () => {
    try {
      const response = await getAllGrades();
      setGradeData(response.data);
      // setIsLoading(false)
    } catch (error) {
      console.log("Error Fetching Grades Data", error.message);
    }
  }
  return (
    <main className='m-1 px-2 py-1.5 bg-background rounded-2xl border-2 border-border'>
      {/* <ScrollArea className={'overflow-auto'}> */}
      <section className='px-6 mt-5'>
        <UserGreeting />
      </section>
      <section className='mt-6'>
        <SectionCards />
      </section>
      <section className='mt-5 px-6 grid grid-cols-1 md:grid-cols-2 gap-5'>
        {
          isLoading 
          ? (<ChartSkelton barChart={true} />)
            : (<StudentsPerCourseChart students={gradeData} /> )
        }
        {
          isLoading
            ? (<ChartSkelton barChart={false} />)
            : (<StudentGradeAverageChart studentData={gradeData} />)

        }
      </section>
      {/* </ScrollArea> */}
    </main>
  )
}

export default Dashboard
