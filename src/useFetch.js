import { useEffect, useState } from "react";

const useFetch = (url) => {
  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const abortController = new AbortController();
    
    setTimeout(() => {
      fetch(url, { signal: abortController.signal })
        .then(res => {
          if (!res.ok) throw Error("Cound not fetch the data for that resource.");
          return res.json();
        })
        .then(data => {
          setData(data);
          setError(null);
        })
        .catch(err => {
          if (err.name === "AbortError") return console.log("fetch aborted")
          setError(err.message)
        });
      }, 1000);

      return () => abortController.abort(); //aborts the fetch

  }, [url])

  return { data, error }

}

export default useFetch;