import ComponentDropdown from "./dropdownList"
import node from "./sort_nodeJS"
import python from "./sort_Python"
import rust from "./sort_rust" 

export default function QuickSortPage() {
  return (
   <div className="app text-center">
      <h1 className="text-4xl">Welcome to the QuickSort Benchmark Page</h1>
      <br />
      <br />
      <br />
      <p>
        <h1 className="text-lg">Welcome to the QuickSort Benchmark Page</h1>
        This page compares the time it takes to sort an array of 500,000 numbers
        using different server-side technologies. <br/> QuickSort is a popular
        sorting algorithm used to sort large datasets efficiently.<br/> By comparing
        the sorting times of different server-side technologies,<br/> we can get an
        idea of which technology is faster or more efficient.
      </p>
      <br/>
      <ComponentDropdown
        NodeJsComponent={node}
        PytonComponent={python}
        RustComponent={rust}
      />

<br/>

<ComponentDropdown
        NodeJsComponent={node}
        PytonComponent={python}
        RustComponent={rust}
      /> 
      <br/>
        <p className="text-lg">
        This benchmark measures the time it takes for each technology to sort an array<br/>
        of 500,000 numbers using QuickSort. The results can be affected by factors such <br/>
        as server load and processing power, so keep that in mind when interpreting <br/>
        the data. Click on the dropdown menu above to see the results for each technology. <br/>
        <br/>hoped that you find this informative!
      </p>
    </div>
  );
}

