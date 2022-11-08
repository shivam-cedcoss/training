import { useState } from "react";
const Fetch = () => {
  const [apidata, setApidata] = useState([]);
  const [loading, setloading] = useState(false);
  const [status,setstatus]=useState(false);
  const [errorMsg,setErrorMsg]=useState('');
  const fetchApi = async (url,options) => {
    setloading(true);
    let response = await fetch(url, options);
    let result = await response.json();
    setstatus(result.success)
    setErrorMsg(result.message)
    setApidata(result);
    setloading(false);
  };
  return { fetchApi, apidata, loading,status,errorMsg};
};
export default Fetch;
