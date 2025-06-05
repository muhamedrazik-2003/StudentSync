import React from 'react'
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ChartSkelton = () => {
    return (
        <Card className="w-full h-[370px]">
            <CardHeader>
                <CardTitle>
                    <Skeleton className="h-6 w-40" />
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4 mt-6">
                    <Skeleton className="h-[240px] w-full rounded-md" />
                </div>
            </CardContent>
        </Card>
    )
}

export default ChartSkelton
