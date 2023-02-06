import { useState } from "react";
import Dropdown from "./components/Dropdown";
function App() {
  const [selection, setSelection] = useState(null);
  const handleSelect = (option) => {
    setSelection(option);
    console.log(selection);
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div className="flex">
      <Dropdown value={selection} options={options} onChange={handleSelect} />
      <Dropdown value={selection} options={options} onChange={handleSelect} />
    </div>
  );
}

export default App;
