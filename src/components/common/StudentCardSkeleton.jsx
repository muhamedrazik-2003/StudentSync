import { Skeleton } from "@/components/ui/skeleton";

const StudentCardSkeleton = () => {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-md w-full max-w-sm space-y-3">
      <div className="flex justify-between items-start">
        <Skeleton className="h-5 w-28 rounded-md" />
        <Skeleton className="h-4 w-4 rounded-full" />
      </div>
      <Skeleton className="h-3 w-24 rounded-md" />

      <div className="space-y-2 pt-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex justify-between items-center">
            <Skeleton className="h-4 my-1 w-40 rounded-md" />
            <Skeleton className="h-4 my-1 w-6 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentCardSkeleton;
