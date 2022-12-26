import './App.css';
import SelectBox from './components/SelectBox';

function App() {
  const options1 = [
    { value: "1", label: "Russia" },
    { value: "2", label: "Russia Federation", description: "Lorem ipsum dolor sit amet, consectetur" },
    { value: "3", label: "Republic of Russia", description: "Lorem ipsum dolor sit amet, consectetur" },
    { value: "4", label: "Label 4", description: "Lorem ipsum dolor sit amet, consectetur" },
    { value: "5", label: "Label 5" },
    { value: "6", label: "Label 6" },
    { value: "7", label: "Label 7" },
    { value: "8", label: "Label 8" }
  ]
  const options = [
    {
      value: "0",
      label: "This is your Heading 0",
      group: [
        { value: "0.1", label: "Australia" },
        { value: "0.2", label: "Japan" },
      ],
    },
    {
      value: "1.0",
      label: "This is your Heading 1",
      group: [
        { value: "1.1", label: "China" },
        { value: "1.2", label: "Denmark" },
      ],
    },
    {
      value: "2.0",
      label: "Collection Of headings",
      group: [
        { value: "2", label: "India" },
        { value: "3", label: "Albania" },
        { value: "4", label: "Algeria" },
        { value: "5", label: "Bolivia" },
        { value: "6", label: "Brazil" },
        { value: "7", label: "Costa Rica" },
        { value: "8", label: "Egypt" },
      ],
    },
  ];
  return (
    <div className="App">
      <SelectBox
        label={'Label'}
        helperText={'Please enter the text'}
        options={options}
        multi={true}
        searchable={true}
        cleareable={true}
        groupData={true}
        disable={true}
      />
    </div>
  );
}

export default App;
