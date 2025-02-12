import React from "react";
import ComponentDropdown from "./dropdownList";
import node from "./sort_nodeJS";
import python from "./sort_Python";
import rust from "./sort_rust";
import { Link } from "react-router-dom";

export default function QuickSortPage() {
  return (
    <div className="p-6 text-center flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-extrabold mb-6">QuickSort Benchmark</h1>

      <p className="text-lg mb-6 max-w-2xl leading-relaxed">
        This benchmark compares the time taken to sort an array of{" "}
        <span className="font-semibold">500,000</span> numbers using the{" "}
        <span className="font-semibold">QuickSort</span> algorithm in different
        programming languages.
        <br />
        By analyzing execution times, we can determine the efficiency of each
        language in handling computational tasks.
      </p>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl w-full mt-8">
        <ComponentDropdown
          NodeJsComponent={node}
          PytonComponent={python}
          RustComponent={rust}
        />
      </div>

      <p className="text-lg mt-10 max-w-2xl leading-relaxed pb-8">
        Sorting performance can be influenced by factors such as{" "}
        <span className="font-semibold">server load</span> and{" "}
        <span className="font-semibold">hardware resources</span>. Use the
        dropdown above to explore results for each technology.
      </p>
      <Link
        to="/QuickSort-Graph"
        className=" bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out"
      >
        View QuickSort Graphs
      </Link>
    </div>
  );
}
