import React, { useState } from 'react';


function TreeNode({ name, children, onAddChild }) {
  const [newChildName, setNewChildName] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && newChildName.trim() !== '') {
      onAddChild(newChildName.trim());
      setNewChildName('');
    }
  };

  const handleChange = (event) => {
    setNewChildName(event.target.value);
  };
  return (
    <div style={{ backgroundColor: 'red', border: '1px solid black', width: '100%' }}>
      {name}
      {children && (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          {children.map((child) => (
            <div key={child.name} style={{ width: '50%' }}>
              <TreeNode {...child} onAddChild={(name) => onAddChild(name, child)} />
            </div>
          ))}
        </div>
      )}
      <div>
        <input type="text" value={newChildName} onChange={handleChange} onKeyDown={handleKeyDown} />
      </div>
    </div>
  );
}

export default TreeNode