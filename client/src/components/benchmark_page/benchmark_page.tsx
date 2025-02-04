import ComponentDropdown from "./dropdownList";
import fetch_node from "./fetch_nodeJS";
import fetch_python from "./fetch_Python";
import fetch_rust from "./fetch_rust";

export default function BenchmarkPage() {
  return (
    <div className="p-6 text-center flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-5xl font-extrabold mb-6">
        Welcome to the Fetch Benchmark Page
      </h1>

      <p className="text-lg max-w-2xl mb-8 leading-relaxed">
        This is a fetch test. This page compares the time it takes to receive a
        10MB JSON response from different server-side technologies. The
        server-side technology is responsible for processing the request and
        returning the JSON data to the client. By comparing response times
        across different technologies, we can get an idea of which one is faster
        or more efficient.
      </p>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl w-full mb-8">
        <ComponentDropdown
          NodeJsComponent={fetch_node}
          PytonComponent={fetch_python}
          RustComponent={fetch_rust}
        />
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl w-full mb-8">
        <ComponentDropdown
          NodeJsComponent={fetch_node}
          PytonComponent={fetch_python}
          RustComponent={fetch_rust}
        />
      </div>

      <p className="text-lg max-w-2xl leading-relaxed">
        This benchmark measures the time it takes for each technology to receive
        and parse a 10MB JSON file. The results can be affected by factors such
        as network latency and server load, so keep that in mind when
        interpreting the data. Click on the dropdown menus above to see the
        results for each technology.
      </p>

      <p className="text-lg max-w-2xl mt-4 leading-relaxed">
        Hope you find this information helpful!
      </p>
    </div>
  );
}
