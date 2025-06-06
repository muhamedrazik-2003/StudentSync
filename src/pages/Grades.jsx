import React, { useState, useEffect } from 'react'
import UserGreeting from '@/components/common/UserGreeting';
import { GradeCards } from '@/components/gradePage/GradeCards';
import { getAllGrades } from '@/services/AllApi';
import { ScrollArea } from '@/components/ui/scroll-area';
import { School } from 'lucide-react';
import CardSkeleton from '@/components/common/CardSkeleton';

const Grades = () => {
  const [gradeData, setGradeData] = useState([]);
  const [pageReload, setPageReload] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    fetchGradeData()
  }, [pageReload]);

  const fetchGradeData = async () => {
    try {
      const response = await getAllGrades();
      setGradeData(response.data);
      setIsLoading(false)
    } catch (error) {
      console.log("Error Fetching Grades Data", error.message);
    }
  }
  return (
    <main className=' m-1 px-2 py-1.5 bg-background rounded-2xl border-2 border-border h-[calc(100vh-32px)]'>
      <section className='px-6 mt-5'>
        <UserGreeting />
      </section>
      <div className='flex justify-end items-center mt-6 px-7 pb-2'>
        <h2 className="text-[20px] mr-auto font-semibold text-slate-900  flex items-center gap-2">
          <School className="size-5.5 text-primary" />
          Student Grades
        </h2>
      </div>
      <ScrollArea className={'h-[75%]'}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4 px-6">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => <CardSkeleton key={index} />)
            : gradeData.map(cardData => (
              <GradeCards setPageReload={setPageReload} cardData={cardData} />
            ))
          }
        </div>
      </ScrollArea>
    </main>
  )
}

export default Grades
