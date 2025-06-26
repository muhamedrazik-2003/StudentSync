import React from 'react'
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ChartSkelton = ({ barChart }) => {
    return (
        <Card className="w-full h-[370px]">
            <CardHeader>
                <CardTitle>
                    <Skeleton className="h-6 w-40" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-3 mt-6">
                    {barChart
                        ? <>
                            <Skeleton className="h-[25px] w-[90%] rounded-md" />
                            <Skeleton className="h-[25px] w-[55%] rounded-md" />
                            <Skeleton className="h-[25px] w-[68%] rounded-md" />
                            <Skeleton className="h-[25px] w-[30%] rounded-md" />
                            <Skeleton className="h-[25px] w-[84%] rounded-md" />
                            <Skeleton className="h-[15px] w-[40%] mt-10 rounded-md" />

                        </>
                        :
                        <>
                            <Skeleton className="h-[200px] w-52 mx-auto rounded-full" />
                            <Skeleton className="h-[15px] w-40 mt-5 rounded-md" />
                        </>
                    }
                </div>
            </CardContent>
        </Card>
    )
}

export default ChartSkelton
