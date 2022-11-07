import { useState } from "react";
const Fetch = () => {
  const [apidata, setApidata] = useState([]);
  const [loading, setloading] = useState(false);
  const [status,setstatus]=useState(false);
  const fetchApi = async (url,token) => {
    var options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
      };
    setloading(true);
    let response = await fetch(url, options);
    let result = await response.json();
    setstatus(result.success)
    setApidata(result);
    setloading(false);
  };
  return { fetchApi, apidata, loading,status};
};
export default Fetch;
