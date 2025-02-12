import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  CartesianGrid,
} from "recharts";

const data = [
  { language: "Rust", time: 0.1894, color: "#B7410E" },
  { language: "Node.js", time: 4.9959, color: "#339933" },
  { language: "Python", time: 11.7542, color: "#306998" },
];

export default function QuickSortBenchmark() {
  return (
    <div className="p-6 text-center flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-extrabold mb-6">QuickSort Benchmark</h1>

      <p className="text-lg mb-6 max-w-2xl">
        We automatically ran a QuickSort on 500,000 numbers{" "}
        <span className="font-semibold">100 times</span> in each language and
        took the average execution time to generate the results below.
      </p>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-5xl w-full mb-8">
        <ResponsiveContainer width="100%" height={450}>
          <BarChart
            data={data}
            margin={{ top: 40, right: 30, left: 20, bottom: 5 }}
          >
            <text
              x="50%"
              y={20}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#fff"
              className="text-lg font-semibold"
            >
              Average Execution Time (s) (Lower is better)
            </text>

            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="language" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              wrapperStyle={{ backgroundColor: "#333", color: "#fff" }}
            />
            <Legend wrapperStyle={{ color: "#fff" }} />
            <Bar dataKey="time" name="Execution Time (s)">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="overflow-x-auto w-full max-w-5xl">
        <table className="table-auto w-full text-left">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-3 border-b-2 border-gray-700">Language</th>
              <th className="px-4 py-3 border-b-2 border-gray-700">
                Avg. Time (s)
              </th>
              <th className="px-4 py-3 border-b-2 border-gray-700">
                Explanation
              </th>
              <th className="px-4 py-3 border-b-2 border-gray-700">Pros</th>
              <th className="px-4 py-3 border-b-2 border-gray-700">Cons</th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-gray-700 even:bg-gray-600">
              <td className="px-4 py-3 border-b border-gray-700">Rust</td>
              <td className="px-4 py-3 border-b border-gray-700">0.1894</td>
              <td className="px-4 py-3 border-b border-gray-700">
                Rust compiles to highly optimized machine code with minimal
                runtime overhead.
              </td>
              <td className="px-4 py-3 border-b border-gray-700">
                <ul className="list-none pl-0">
                  <li>High performance</li>
                  <li>Memory safety</li>
                  <li>Great concurrency support</li>
                </ul>
              </td>
              <td className="px-4 py-3 border-b border-gray-700">
                <ul className="list-none pl-0">
                  <li>Steep learning curve</li>
                  <li>Longer compile times</li>
                </ul>
              </td>
            </tr>

            <tr className="odd:bg-gray-700 even:bg-gray-600">
              <td className="px-4 py-3 border-b border-gray-700">Node.js</td>
              <td className="px-4 py-3 border-b border-gray-700">4.9959</td>
              <td className="px-4 py-3 border-b border-gray-700">
                Node.js uses the V8 engine and a single-threaded event loop with
                non-blocking I/O.
              </td>
              <td className="px-4 py-3 border-b border-gray-700">
                <ul className="list-none pl-0">
                  <li>Large ecosystem</li>
                  <li>Non-blocking I/O</li>
                </ul>
              </td>
              <td className="px-4 py-3 border-b border-gray-700">
                <ul className="list-none pl-0">
                  <li>Single-threaded</li>
                  <li>Slower than compiled languages</li>
                </ul>
              </td>
            </tr>

            <tr className="odd:bg-gray-700 even:bg-gray-600">
              <td className="px-4 py-3 border-b border-gray-700">Python</td>
              <td className="px-4 py-3 border-b border-gray-700">11.7542</td>
              <td className="px-4 py-3 border-b border-gray-700">
                Python is interpreted and dynamically typed, resulting in extra
                runtime overhead.
              </td>
              <td className="px-4 py-3 border-b border-gray-700">
                <ul className="list-none pl-0">
                  <li>Simple to learn</li>
                  <li>Great for data science</li>
                </ul>
              </td>
              <td className="px-4 py-3 border-b border-gray-700">
                <ul className="list-none pl-0">
                  <li>Slower execution</li>
                  <li>High memory usage</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
