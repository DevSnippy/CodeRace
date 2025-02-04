import React from "react";
import ComponentDropdown from "./dropdownList";
import node from "./sort_nodeJS";
import python from "./sort_Python";
import rust from "./sort_rust";

export default function QuickSortPage() {
  return (
    <div className="p-6 text-center flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-extrabold mb-6">QuickSort Benchmark</h1>

      <p className="text-lg mb-8 max-w-2xl leading-relaxed">
        This benchmark compares the time taken to sort an array of{" "}
        <span className="font-semibold">500,000</span> numbers using the{" "}
        <span className="font-semibold">QuickSort</span> algorithm in different
        programming languages.
        <br />
        By analyzing execution times, we can determine the efficiency of each
        language in handling computational tasks.
      </p>

      {/* Container for the dropdown */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl w-full mb-8">
        <ComponentDropdown
          NodeJsComponent={node}
          PytonComponent={python}
          RustComponent={rust}
        />
      </div>

      <p className="text-lg mt-10 max-w-2xl leading-relaxed">
        Sorting performance can be influenced by factors such as{" "}
        <span className="font-semibold">server load</span> and{" "}
        <span className="font-semibold">hardware resources</span>. Use the
        dropdown above to explore results for each technology.
      </p>
    </div>
  );
}
