import TreeNode from "./TreeNode"

const data = {
  name: 'root',
  children: [
    {
      name: 'first child',
      children: [],
    },
  ],
};


function App() {
  const handleAddChild = (name, parent) => {
    const newChild = {
      name,
      children: []
    };
    parent.children.push(newChild);

  };

  return (
    <div>
      <TreeNode {...data} onAddChild={handleAddChild} />
    </div>
  );
}

export default App;
