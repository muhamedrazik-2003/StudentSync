import { useState } from "react"
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
import { Pen, PenOff } from "lucide-react"
import { updateCurrentGrade } from "@/services/AllApi"

export function GradeCards({ setPageReload, cardData }) {
    const [updatedGrade, setUpdatedGrade] = useState({ ...cardData })
    const [isEditing, setIsEditing] = useState(false)

    const handleUpdate = async (studentID, updatedData) => {
        try {
            console.log(updatedData)
            const response = await updateCurrentGrade(studentID, updatedData)
            setPageReload(prev => !prev)
        } catch (error) {
            alert("Error Updating Student Grade", error.message);
            console.log("Error Updating Student Grade", error.message);
        }
    }
    return (
        <Card className="w-full justify-center rounded-2xl gap-2 shadow-sm p-3 pb-2">
            <CardHeader className="px-3">
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-lg font-semibold text-title">
                            {`${cardData.id} : ${cardData.studentName}`}
                        </CardTitle>
                        <CardDescription className="text-slate-500 text-sm">
                            {cardData.course}
                        </CardDescription>
                    </div>
                    <Button variant="link" size="md" onClick={() => setIsEditing(!isEditing)} className="text-primary px-2 mb-3">
                        {isEditing
                            ? <PenOff />
                            : <Pen />
                        }

                    </Button>
                </div>
            </CardHeader>
            <CardContent className="px-3 space-y-2">
                {cardData.subjects?.map((subject, index) => (
                    <div className="flex justify-between items-center border-b last:border-none pb-1 text-sm text-black">
                        <span>{subject?.name}</span>
                        {isEditing
                            ? <Input
                                id=""
                                name="grade"
                                onChange={(e) => {
                                    const updatedSubjects = [...updatedGrade.subjects];
                                    updatedSubjects[index] = { ...updatedSubjects[index], grade: e.target.value, };
                                    setUpdatedGrade((prev) => ({ ...prev, subjects: updatedSubjects, }));
                                }}
                                defaultValue={subject.grade}
                                className="font-medium  p-0 m-0 text-sm  text-center w-[32px] h-[32px]" />
                            : <span className="inline-flex items-center justify-center h-8 w-8  text-sm font-semibold text-title">
                                {subject.grade}
                            </span>
                        }
                    </div>
                ))}
            </CardContent>
            {isEditing && (<CardFooter className="flex justify-end gap-2 p-0 mr-1 mb-1">
                <Button className={'rounded-full'} variant="ghost" size="sm" onClick={() => setIsEditing(false)}>Cancel</Button>
                <Button
                    className={'rounded-full px-5'} size="sm"
                    onClick={() => {
                        setIsEditing(false)
                        handleUpdate(cardData.id, updatedGrade)
                    }}>Save</Button>
            </CardFooter>
            )
            }
        </Card>


    )
}
