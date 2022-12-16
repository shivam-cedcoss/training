import Taxonomy from './taxonomy/Taxonomy';
import { data } from "../src/taxonomy/Data";
function App() {
  return (
    <>
    <Taxonomy data={data}/>
    </>
  );
}
export default App;
