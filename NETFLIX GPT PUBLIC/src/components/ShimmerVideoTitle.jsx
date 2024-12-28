import React from "react";
const ShimmerVideoTitle = () => {
  return (
    <div className="w-100vw h-[56.25vw] px-20 absolute py-[15rem]">
      <div className="animate-pulse">
        <div className="w-36 h-52 bg-gray-700 rounded-md" />

        <div className="mt-8 space-y-4">
          <div className="h-8 w-64 bg-gray-700 rounded-md" />
          <div className="space-y-2">
            <div className="h-4 w-full max-w-2xl bg-gray-700 rounded-md" />
            <div className="h-4 w-full max-w-xl bg-gray-700 rounded-md" />
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="w-24 h-10 bg-gray-700 rounded-lg" />
          <div className="w-32 h-10 bg-gray-700 rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export default ShimmerVideoTitle;
