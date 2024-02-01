import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Skeleton from "@/components/ui/skeleton";
import { lusitana } from "@/components/ui/fonts";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";
export const HeadingSkeleton: React.FC = () => {
  return (
    <div className="mb-2 space-y-2 w-36">
      <div className="h-8 overflow-hidden rounded-md bg-gray-100 animate-shimmer_2s_infinite" />
      <div className="h-4 overflow-hidden rounded-md bg-gray-100 animate-shimmer_2s_infinite" />
    </div>
  );
};

const CardSkeleton: React.FC = () => {
  return (
    <Card className="rounded-xl bg-gray-50 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-start">
        <Skeleton className="h-5 w-5 text-gray-700" />
        <CardTitle className="ml-2 text-sm font-medium">
          <Skeleton className="w-16 h-4 bg-white" />
        </CardTitle>
      </CardHeader>
      <CardContent className="text-2xl font-bold">
        <p
          className={`${lusitana.className} truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
        >
          <Skeleton className="w-full h-6 bg-white" />
        </p>
      </CardContent>
    </Card>
  );
};

const OverviewSkeleton: React.FC = () => {
  return (
    <div className={`${shimmer} relative w-11/12 mx-auto overflow-hidden`}>
      <Card className="rounded-xl bg-gray-100 p-2 shadow-sm">
        <CardHeader>
          <CardTitle className="ml-2 text-xl font-semibold">
            <Skeleton className="w-24 h-6 bg-white" />
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <div className="mt-0 grid h-[300px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <Skeleton key={index} className="w-full h-8 bg-white" />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Loading: React.FC = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-4">
        <HeadingSkeleton />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))}
        </div>
      </div>
      <OverviewSkeleton />
    </div>
  );
};

export default Loading;
