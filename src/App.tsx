import AutoComplete from './autoComplete/AutoComplete';
function App() {

  const options = [
    {
      label: "Barbara-anne Barbara-anne Barbara-anne Barbara-anne",
      value: "Barbara-anne Barbara-anne Barbara-anne Barbara-anne",
      lname: "hello",
      id: "popover0",
      popoverContent: (<div>
        <h1>Heading</h1>
        <p>popover0</p>
      </div>)
    },
    {
      label: "Jahaj Jahaaj jahaajj",
      value: "Jahaj Jahaaj jahaajj",
      id: "popover1",
    },
    {
      label: "Debi",
      value: "Debi",
      id: "popover2",
      popoverContent: (<div>
        <h1>Heading</h1>
        <p>popover2</p>
      </div>)
    },
    {
      label: "Debi one",
      value: "Debi one",
      id: "popover3",

    },
    {
      label: "Cara",
      value: "Cara",
      id: "popover4",

    },
    {
      label: "Cristin",
      value: "Cristin",
      id: "popover5",
      popoverContent: (<div>
        <h1>Heading</h1>
        <p>popover5</p>
      </div>)
    },
    {
      label: "Auto Autox",
      value: "Auto Autox",
      id: "popover5",
    },
    {
      label: "Auto pqr",
      value: "Auto pqr",
      id: "popover5",
    },
    {
      label: "Jocelyne",
      value: "Jocelyne",
      id: "popover6",
    },
    {
      label: "Elmo",
      value: "Elmo",
      id: "popover7",
    },
    {
      label: "Ivette",
      value: "Ivette",
      id: "popover8",
    },
    {
      label: "Lea",
      value: "Lea",
      id: "popover9",
      popoverContent: (<div>
        <h1>Heading</h1>
        <p>popover9</p>
      </div>)
    },
    {
      label: "Michel",
      value: "Michel",
      id: "popover10",
    },
    {
      label: "Leigha",
      value: "Leigha",
      id: "popover11",
    },
    {
      label: "Titus",
      value: "Titus",
    },
    {
      label: "Nollie",
      value: "Nollie",
    },
    {
      label: "Celle",
      value: "Celle",
    },
    {
      label: "Thea",
      value: "Thea",
    },
    {
      label: "Brynn",
      value: "Brynn",
    },
    {
      label: "Sloane",
      value: "Sloane",
    },
    {
      label: "Margalo",
      value: "Margalo",
    },
    {
      label: "Genevieve",
      value: "Genevieve",
    },
    {
      label: "Niel",
      value: "Niel",
      popoverContent: (<div>
        <h1>Heading</h1>
        <p>Niel</p>
      </div>)
    },
    {
      label: "Heddi",
      value: "Heddi",
    },
    {
      label: "Gregg",
      value: "Gregg",
    },
    {
      label: "Eduard",
      value: "Eduard",
    },
    {
      label: "Kizzee",
      value: "Kizzee",
    },
    {
      label: "Truman",
      value: "Truman",
      popoverContent: (<div>
        <h1>Heading</h1>
        <p>Truman</p>
      </div>)
    },
    {
      label: "Merill",
      value: "Merill",
    },
    {
      label: "Lindie",
      value: "Lindie",
    },
    {
      label: "Vasily",
      value: "Vasily",
    },
    {
      label: "Averil",
      value: "Averil",
    },
    {
      label: "Golda",
      value: "Golda",
    },
    {
      label: "Zorine",
      value: "Zorine",
      popoverContent: (<div>
        <h1>Heading</h1>
        <p>Zorine</p>
      </div>)
    },
    {
      label: "Odele",
      value: "Odele",
    },
    {
      label: "Amalie",
      value: "Amalie",
    },
    {
      label: "Ilsa",
      value: "Ilsa",
    },
    {
      label: "Pepillo",
      value: "Pepillo",
    },
  ];
  return <AutoComplete options={options} label="Name" helpText="Kindly Search your required Item"/>
}

export default App;
