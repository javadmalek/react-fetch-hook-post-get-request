import { useState, useEffect } from "react";
import camelcaseKeys from "camelcase-keys";

const HookFetch = fetchUrl => {
  const [data, setData] = useState(null);

  const parseData = data => camelcaseKeys(data, { deep: true });

  useEffect(() => {
    fetch(fetchUrl)
      .then(response => response.json())
      .then(data => setData(parseData(data)))
      .catch(error => console.log(error));
  }, [fetchUrl]);

  return data;
};

export default HookFetch;
