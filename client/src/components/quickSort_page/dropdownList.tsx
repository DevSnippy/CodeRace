import React, { useState } from "react";

type Props = {
  NodeJsComponent: React.FC;
  PytonComponent: React.FC;
  RustComponent: React.FC;
};

const ComponentDropdown: React.FC<Props> = ({
  NodeJsComponent,
  PytonComponent,
  RustComponent,
}) => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null,
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponent(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <select
        className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700
                   focus:outline-none focus:border-blue-500 transition-colors"
        value={selectedComponent ?? ""}
        onChange={handleChange}
      >
        <option value="">Select a language</option>
        <option value="nodejs">Node.js</option>
        <option value="python">Python</option>
        <option value="rust">Rust</option>
      </select>

      <div className="mt-4 text-white w-full">
        {selectedComponent === "nodejs" && <NodeJsComponent />}
        {selectedComponent === "python" && <PytonComponent />}
        {selectedComponent === "rust" && <RustComponent />}
      </div>
    </div>
  );
};

export default ComponentDropdown;
