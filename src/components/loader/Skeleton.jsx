import React from "react";

const Skeleton = () => {
  return (
    <div className="animate-pulse group bg-gray-200 rounded-xl overflow-hidden shadow-sm border border-gray-100">
      <div className="relative overflow-hidden aspect-square bg-gray-300"></div>
      <div className="p-5">
        <div className="h-3 bg-gray-300 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-full mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default Skeleton;
