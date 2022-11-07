import "@shopify/polaris/build/esm/styles.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Product from "./productListing/Product";
function App() {
  return <>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/product" element={<Product/>}/>
    </Routes>
  </>;
}

export default App;
