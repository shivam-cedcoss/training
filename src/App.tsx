import React from 'react';
import './App.css';
import Select from './select/Select';
function App() {
  const options = [
    { value: "1", label: "Russia" },
    { value: "2", label: "Russia Federation", description: "Lorem ipsum dolor sit amet, consectetur" },
    { value: "3", label: "Republic of Russia", description: "Lorem ipsum dolor sit amet, consectetur" },
    { value: "4", label: "Label 4", description: "Lorem ipsum dolor sit amet, consectetur" },
    { value: "5", label: "Label 5" },
    { value: "6", label: "Label 6" },
    { value: "7", label: "Label 7" },
    { value: "8", label: "Label 8" }
  ]
  return (
    <>
      <Select label={null} searchHelpText={false} isSearchable={true} options={options} loading={false} withDescription={true} multiSelect={true} />
    </>
  );
}

export default App;
