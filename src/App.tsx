import SelectBox from './components/SelectBox';
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
  
  const options1 = [
    {
      "value": "0",
      "label": "This is your Heading 0",
      "group": [
        {
          "value": "0.1",
          "label": "Option 0.1"
        },
        {
          "value": "0.2",
          "label": "Option 0.2"
        }
      ]
    },
    {
      "value": "1.0",
      "label": "This is your Heading 1",
      "group": [
        {
          "value": "1.1",
          "label": "Option 1.1"
        },
        {
          "value": "1.2",
          "label": "Option 1.2"
        }
      ]
    },
    {
      "value": "2.0",
      "label": "Collection Of headings",
      "group": [
        {
          "value": "2",
          "label": "Option2"
        },
        {
          "value": "3",
          "label": "Option3"
        },
        {
          "value": "4",
          "label": "Option4"
        },
        {
          "value": "5",
          "label": "Option5"
        },
        {
          "value": "6",
          "label": "Option6"
        },
        {
          "value": "7",
          "label": "Option7"
        },
        {
          "value": "8",
          "label": "Option8"
        }
      ]
    }
  ]

  return (
    <div className="App">
      <SelectBox
        label={'Label'}
        helperText={'Please enter the text'}
        options={options}
        multi={true}
        searchable={true}
        cleareable={true}
        groupData={false}
        disable={true}
      />
    </div>
  );
}

export default App;
