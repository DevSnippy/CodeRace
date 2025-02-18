import React, { useState } from "react";

interface Data {
  userId: number;
  id: number;
}

const NodeJsComponent: React.FC = () => {
  const [Data, setTodo] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(0);

  const fetchData = async () => {
    setLoading(true);

    const startTime = Date.now();

    try {
      const response = await fetch("/api/node/quicksort/sorted/500");
      const data = await response.json();
      setTodo(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }

    const endTime = Date.now();
    const elapsedTime = (endTime - startTime) / 1000;

    setTime(elapsedTime);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={fetchData}>
        click here to sort Data from node js server
      </button>

      {loading && <p>Loading...</p>}

      {Data && (
        <div>
          <p>{`Time taken: ${time}s`}</p>
          <p>
            click{" "}
            <a href="http://localhost:3001/quickSort/sorted/500" target="blank">
              here{" "}
            </a>
            to see the result
          </p>
        </div>
      )}
    </div>
  );
};

export default NodeJsComponent;
