"use client";

import { TrendingUp } from "lucide-react";
import {
    PolarAngleAxis,
    PolarGrid,
    Radar,
    RadarChart,
} from "recharts";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

export default function StudentGradeAverageChart({ studentData = [] }) {
    // Convert letter grades to points
    const gradeToPoints = (grade) => {
        const gradeMap = {
            "A+": 4.3,
            A: 4.0,
            "A-": 3.7,
            "B+": 3.3,
            B: 3.0,
            "B-": 2.7,
            "C+": 2.3,
            C: 2.0,
            "C-": 1.7,
            "D+": 1.3,
            D: 1.0,
            F: 0.0,
        };
        return gradeMap[grade] ?? 0;
    };

    // Calculate average grades per course
    const calculateAverageGrades = () => {
        const courseGrades = {};

        studentData.forEach((student) => {
            const course = student.course;
            if (!courseGrades[course]) {
                courseGrades[course] = { total: 0, count: 0 };
            }

            student.subjects.forEach((subject) => {
                courseGrades[course].total += gradeToPoints(subject.grade);
                courseGrades[course].count += 1;
            });
        });

        return Object.entries(courseGrades).map(([course, data]) => ({
            course,
            averageGrade: parseFloat((data.total / data.count).toFixed(2)),
        }));
    };

    const chartData = calculateAverageGrades();

    const chartConfig = {
        averageGrade: {
            label: "Average Grade",
            color: "var(--primary)",
        },
    };

    return (
        <Card className={'gap-2'}>
            <CardHeader className="items-center pb-2">
                <CardTitle>Average Student Grades by Course</CardTitle>
            </CardHeader>
            <CardContent className="pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto"
                >
                    <RadarChart data={chartData}>
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <PolarAngleAxis dataKey="course" />
                        <PolarGrid />
                        <Radar
                            dataKey="averageGrade"
                            fill="var(--color-averageGrade)"
                            fillOpacity={0.6}
                        />
                    </RadarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    {chartData.length > 0
                        ? `${chartData.reduce((a, b) => (a.averageGrade > b.averageGrade ? a : b)).course} has the highest average grade`
                        : "No data available"}{" "}
                    <TrendingUp className="h-4 w-4" />
                </div>
            </CardFooter>
        </Card>
    );
}
