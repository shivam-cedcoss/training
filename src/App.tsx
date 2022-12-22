import React from 'react';
import './App.css';
import Select from './select/Select';
function App() {
  const options = [
    { value: "1", label: "Russia"},
    { value: "2", label: "Russia Federation", description: "Lorem ipsum dolor sit amet, consectetur" },
    { value: "3", label: "Republic of Russia", description: "Lorem ipsum dolor sit amet, consectetur" },
    { value: "4", label: "Label 4", description: "Lorem ipsum dolor sit amet, consectetur" }
  ]
  return (
    <>
      <Select label={null} searchHelpText={false} isSearchable={true} options={options} loading={false} withDescription={true} />
    </>
  );
}

export default App;
