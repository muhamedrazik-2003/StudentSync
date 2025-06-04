// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
// } from "recharts";

// const StudentsPerCourseChart = ({ data }) => {
//   const courseCount = data.reduce((acc, student) => {
//     acc[student.course] = (acc[student.course] || 0) + 1;
//     return acc;
//   }, {});

//   const chartData = Object.entries(courseCount).map(([course, count]) => ({
//     course,
//     count,
//   }));

//   return (
//     <div className="w-full h-64 p-4 rounded-xl bg-white shadow">
//       <h2 className="text-lg font-semibold mb-4 text-title text-center">
//         Students per Course
//       </h2>
//       <ResponsiveContainer width="100%" height="100%">
//         <BarChart data={chartData} barSize={30}>
//           <XAxis
//             dataKey="course"
//             tick={{ fill: "#64748B", fontSize: 10 }}
//             axisLine={{ stroke: "#E2E8F0" }}
//             tickLine={false}
//           />
//           <YAxis
//             allowDecimals={false}
//             tick={{ fill: "#64748B", fontSize: 10 }}
//             axisLine={{ stroke: "#E2E8F0" }}
//             tickLine={true}
//           />
//           <Tooltip
//             contentStyle={{
//               backgroundColor: "#b5e3d8",
//               borderColor: "#E2E8F0",
//               fontSize: "14px",
//               color: "#0F172A",
//             }}
//             cursor={{ fill: "#E2E8F0" }}
//           />
//           <Bar dataKey="count" fill="#03af87" radius={[0, 9, 4, 4]} />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default StudentsPerCourseChart;

"use client";

import {
    Bar,
    BarChart,
    CartesianGrid,
    LabelList,
    XAxis,
    YAxis,
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

const chartConfig = {
    students: {
        label: "Students",
        color: "hsl(var(--chart-1))",
    },
    label: {
        color: "hsl(var(--primary))",
    },
};

// Function to group students per course
const transformStudentData = (students) => {
    const courseCount = students.reduce((acc, student) => {
        acc[student.course] = (acc[student.course] || 0) + 1;
        return acc;
    }, {});

    return Object.entries(courseCount).map(([course, count]) => ({
        course,
        students: count,
    }));
};

export default function StudentsPerCourseChart({ students = [] }) {
    const chartData = transformStudentData(students);

    return (
        <Card className={'rounded-2xl gap-4'}>
            <CardHeader>
                <CardTitle>Students per Course</CardTitle>
                <CardDescription>Total Students: {students.length}</CardDescription>
            </CardHeader>

            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        layout="vertical"
                        margin={{ right: 16 }}
                    >
                        <CartesianGrid horizontal={false} />

                        <YAxis
                            dataKey="course"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                            hide
                        />
                        <XAxis dataKey="students" type="number" hide />

                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />

                        <Bar
                            dataKey="students"
                            layout="vertical"
                            fill="var(--color-primary)"
                            radius={8}
                        >
                            <LabelList
                                dataKey="course"
                                position="insideLeft"
                                offset={8}
                                className="fill-[black]"
                                fontSize={12}
                                formatter={(value) => value.length > 12 ? value.slice(0, 10) + "…" : value}
                            />
                            <LabelList
                                dataKey="students"
                                position="right"
                                offset={8}
                                className="fill-foreground"
                                fontSize={12}
                            />
                        </Bar>
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}

