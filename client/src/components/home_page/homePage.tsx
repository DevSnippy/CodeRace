import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div className="p-6 text-center flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-extrabold mb-6">Welcome to CodeRace</h1>
      <p className="text-lg mb-8 max-w-2xl">
        CodeRace is a performance benchmarking platform that puts programming
        languages to the test. Currently, we benchmark{" "}
        <span className="font-bold text-orange-400">Rust</span>,{" "}
        <span className="font-bold text-green-400">Node.js</span>, and{" "}
        <span className="font-bold text-blue-400">Python</span>.
      </p>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-4">Benchmarking Tests</h2>
        <ul className="text-left">
          <li className="mb-3">
            <span className="font-semibold text-yellow-300">Sorting Test:</span>{" "}
            Measures execution time for sorting a large dataset using the
            QuickSort algorithm.
          </li>
          <li>
            <span className="font-semibold text-red-300">Fetch Test:</span>{" "}
            Evaluates network performance by downloading a 10MB file.
          </li>
        </ul>
      </div>

      <div className="mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg text-lg">
          <Link to="/quicksort" className="flex items-center text-white">
            Start A Benchmark!
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
