import { Skeleton } from "@/components/ui/skeleton"

export default function TableSkeleton({headerSkeltonData}) {
    return (
        <table className="min-w-full">
            <thead className=" border-b">
                <tr>
                    {headerSkeltonData.map((title, id) => (
                        <th
                            key={id}
                            className="px-4 py-3 text-left text-sm font-semibold text-black"
                        >
                            {title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
                {Array.from({ length: 9 }).map((_, rowIdx) => (
                    <tr key={rowIdx} className="hover:bg-slate-50 transition">
                        {[...Array(6)].map((_, cellIdx) => (
                            <td key={cellIdx} className="px-4 py-4">
                                <Skeleton className="h-4 w-full rounded-md" />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
