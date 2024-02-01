import Container from "@/components/ui/container";
import Skeleton from "@/components/ui/skeleton";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { lusitana } from "@/components/ui/fonts";

// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

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

// OverviewSkeleton
const OverviewSkeleton: React.FC = () => {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <div className="mb-4 h-8 w-36 rounded-md bg-gray-100">
        <Skeleton className="w-full h-full bg-white" />
      </div>
      <div className="rounded-xl bg-gray-100 p-4">
        <div className="mt-0 grid h-[410px] grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4">
          {Array.from({ length: 12 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-8 bg-white" />
          ))}
        </div>
      </div>
    </div>
  );
};

const Loading: React.FC = () => {
  return (
    <Container>
      <div className="relative mb-4 h-8 w-36 overflow-hidden rounded-md bg-gray-100 animate-shimmer_2s_infinite">
        <div className="w-full h-full p-8">
          <div className="mt-6 lg:col-span-4 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Skeleton className="aspect-square rounded-xl" />
              <Skeleton className="aspect-square rounded-xl" />
              <Skeleton className="aspect-square rounded-xl" />
            </div>
          </div>
          <Skeleton className="w-full aspect-square rounded-xl md:aspect-[2.4/1]" />
          <div className="lg:grid lg:grid-cols-5 gap-x-8 mt-4 h-full">
            <div className="hidden lg:block">
              <Skeleton className="w-full h-[-500px] rounded-xl" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <CardSkeleton key={index} />
        ))}
      </div>

      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>
            <Skeleton className="w-24 h-6 bg-white" />
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <OverviewSkeleton />
        </CardContent>
      </Card>
    </Container>
  );
};

export default Loading;
