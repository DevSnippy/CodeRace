import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center mt-12">Welcome to Code Race!</h1>
      <p className="text-lg text-gray-600 text-center mt-6">Here you can compare the performance of different programming languages.</p>
      <p className="text-lg text-gray-600 mt-8">We currently have two tests available:</p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Fetch JSON Test</h2>
        <p className="text-lg text-gray-600 mt-2">The Fetch JSON test measures the time it takes to retrieve and parse a JSON file from a server. This test is useful for measuring the performance of networking and data processing in different programming languages.</p>
      </div>
      <div className="mt-6">
        <h2 className="text-xl font-semibold">Quicksort Test</h2>
        <p className="text-lg text-gray-600 mt-2">The Quicksort test measures the time it takes to sort an array of numbers using the Quicksort algorithm. This test is useful for measuring the performance of sorting algorithms and the general computational speed of different programming languages.</p>
      </div>
      <p className="text-lg text-gray-600 mt-8">To run a test, choose a it from the navbar</p>
     
    </div>
  );
};

export default HomePage;
