"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

export function GradeChart({ students }) {
  const GRADE_VALUES = {
    "A+": 10,
    "A": 9,
    "A-": 8,
    "B+": 7,
    "B": 6,
    "B-": 5,
  }

  const subjectGrades = {}

  students.forEach((student) => {
    student.subjects.forEach(({ name, grade }) => {
      const value = GRADE_VALUES[grade] || 0
      if (!subjectGrades[name]) subjectGrades[name] = []
      subjectGrades[name].push(value)
    })
  })

  const data = Object.entries(subjectGrades).map(([subject, grades]) => {
    const avg =
      grades.reduce((total, curr) => total + curr, 0) / grades.length
    return {
      name: subject,
      avg: avg.toFixed(2),
    }
  })

  return (
    <div className="w-full h-[350px] p-4 bg-white rounded-xl shadow-md">
      <h3 className="text-xl font-semibold text-title mb-4">
        Average Grade by Subject
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="#8884d8" />
          <YAxis domain={[0, 10]} />
          <Tooltip />
          <Bar dataKey="avg" fill="#3AA0FF" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
