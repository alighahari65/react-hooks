import { useEffect, useState } from "react";

const UseFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, [url]);
  
  return data;
  
};

export default UseFetch;