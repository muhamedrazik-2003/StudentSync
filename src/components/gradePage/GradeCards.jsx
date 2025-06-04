import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SquarePen } from "lucide-react"

export function GradeCards({ setPageReload, rowData }) {
    console.log(rowData)
    return (
        <>
            {
                rowData?.map((student) => (
                    <Card className="w-full justify-center rounded-2xl gap-2 shadow-md bg-white p-3 pb-2">
                        <CardHeader className="px-3">
                            <div className="flex items-center justify-between">
                                <div>
                                    <CardTitle className="text-lg font-semibold text-title">
                                        {`${student.id} : ${student.studentName}`}
                                    </CardTitle>
                                    <CardDescription className="text-slate-500 text-sm">
                                        {student.course}
                                    </CardDescription>
                                </div>
                                <Button variant="link" size="md" className="text-primary px-2 mb-3">
                                    <SquarePen/>
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="px-3 space-y-2">
                            {student.subjects?.map((subject) => (
                                <div className="flex justify-between items-center border-b last:border-none pb-1 text-sm text-black">
                                    <span>{subject?.name}</span>
                                    <span className="font-medium text-title w-[20px]">{subject?.grade}</span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>

                ))
            }
        </>


    )
}
