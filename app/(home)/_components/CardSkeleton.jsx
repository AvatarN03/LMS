import React from "react";

const CardSkeleton = () => {
  return (
    <div className="animate-pulse border rounded-lg p-4 w-full bg-white dark:bg-slate-800">
      <div className="h-32 w-full rounded-md bg-slate-200 dark:bg-slate-700" />
      <div className="mt-4 h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700" />
      <div className="mt-2 h-3 w-1/2 rounded bg-slate-200 dark:bg-slate-700" />
      <div className="mt-4 flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700" />
        <div className="h-3 w-1/3 rounded bg-slate-200 dark:bg-slate-700" />
      </div>
    </div>
  );
};

export default CardSkeleton;
