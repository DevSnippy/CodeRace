import ComponentDropdown from "./dropdownList"
import fetch_node from "./fetch_nodeJS"
import fetch_python from "./fetch_Python"
import fetch_rust from "./fetch_rust" 

export default function BenchmarkPage() {
  return (
    <div  className="app  text-center">
 <h1 className="text-4xl">Welcome to the Fetch Benchmark Page</h1>
      <br />
      <br />
      <br />
      <p>

        <h1 className="text-lg ">this is a fech test</h1>
        This page compares the time it takes to receive a 10MB JSON response
        from different server-side technologies.<br/> The server-side technology is
        responsible for processing the request and returning the JSON data to
        the client. <br/> By comparing the response times of different server-side
        technologies, we can get an idea of which technology is faster or more
        efficient. 
      </p>
  <br/>
      <ComponentDropdown
        NodeJsComponent={fetch_node}
        PytonComponent={fetch_python}
        RustComponent={fetch_rust}
      />

<br/>
<ComponentDropdown
        NodeJsComponent={fetch_node}
        PytonComponent={fetch_python}
        RustComponent={fetch_rust}
      /> 

<p className="text-lg mt-8">
        This benchmark measures the time it takes for each technology to receive <br/>
        and parse a 10MB JSON file. The results can be affected by factors such <br/>
        as network latency and server load, so keep that in mind when interpreting <br/>
        the data. Click on the dropdown menu above to see the results for each technology. <br/>
        <br/> hoped that you find this infomative!
      </p>
    </div>
  );
}

