import { Users, BookOpen, BarChart2, CalendarPlus } from "lucide-react"
import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useState } from "react"

export function SectionCards({ studentData }) {
    let totalCourses = 0
    let seenCourse = []
    if (studentData.length > 0) {
        for (let student of studentData) {
            if (!seenCourse.includes(student.course)) {
                seenCourse.push(student.course);
                totalCourses += 1;
            }
        }
    }
    
    return (
        <div className=" grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-4 px-2  lg:px-6">
            <Card className="@container/card rounded-2xl">
                <CardHeader >
                    <div className="flex items-center gap-2">
                        <Users className="size-8" />
                        <div>
                            <CardDescription>Total Students</CardDescription>
                            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                                {studentData.length}
                            </CardTitle>
                        </div>
                    </div>
                </CardHeader>
            </Card>
            <Card className="@container/card">
                <CardHeader >
                    <div className="flex items-center gap-2">
                        <BookOpen className="size-8" />
                        <div>
                            <CardDescription>Total Courses</CardDescription>
                            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                                {totalCourses}
                            </CardTitle>
                        </div>
                    </div>
                </CardHeader>
            </Card>
            <Card className="@container/card">
                <CardHeader >
                    <div className="flex items-center gap-2">
                        <BarChart2 className="size-8" />
                        <div>
                            <CardDescription>Average Grade</CardDescription>
                            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                                B+
                            </CardTitle>
                        </div>
                    </div>
                </CardHeader>
            </Card>
            <Card className="@container/card">
                <CardHeader >
                    <div className="flex items-center gap-2">
                        <CalendarPlus className="size-8" />
                        <div>
                            <CardDescription>Latest Enrollment</CardDescription>
                            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                                16
                            </CardTitle>
                        </div>
                    </div>
                </CardHeader>
            </Card>
        </div>
    )
}

