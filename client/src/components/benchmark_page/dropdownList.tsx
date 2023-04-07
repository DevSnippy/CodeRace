import React, { useState } from 'react';

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
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedComponent(event.target.value);
  };

  return (
    <div className=''>
      <select className='outline' value={selectedComponent ?? ''} onChange={handleChange}>
        <option value="">Select a languge</option>
        <option value="nodejs">Node.js</option>
        <option value="python">Python</option>
        <option value="rust">Rust</option>
      </select>
      <br />
      {selectedComponent === 'nodejs' && <NodeJsComponent />}
      {selectedComponent === 'python' && <PytonComponent />}
      {selectedComponent === 'rust' && <RustComponent />}
    </div>
  );
};

export default ComponentDropdown;