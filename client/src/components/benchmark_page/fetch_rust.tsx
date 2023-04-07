import React, { useState } from 'react';

interface Data {
  userId: number;
  id: number;

}

const RustComponent: React.FC = () => {
  const [Data, setTodo] = useState<Data | null>(null);
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState(0);

  const fetchData = async () => {
    setLoading(true);

    const startTime = Date.now();

    try {
      const response = await fetch('http://127.0.0.1:3003/rustJson/10mb');
      const data = await response.json();
      setTodo(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }

    const endTime = Date.now();
    const elapsedTime = endTime - startTime;

    setTime(elapsedTime);
    setLoading(false);
  };

  return (
    <div>
      <button onClick={fetchData}>click here to Fetch Data from rust server</button>

      {loading && <p>Loading...</p>}

      {Data && (
        <div>
        
          <p>{`Time taken: ${time}ms`}</p>
        </div>
      )}
    </div>
  );
};

export default RustComponent;