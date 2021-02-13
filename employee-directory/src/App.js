import React, { useCallback, useEffect, useState } from "react";
import Header from "./components/Header";
import User from "./components/User";
import API from "./utils/API";
import Sort from "./components/Sort"
import Table from "./components/Table"

// Custom Hook
const useAsync = (asyncFunction, immediate = true) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setLoading(true);
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((response) => {
        setValue(response);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, loading, value, error };
};

function App() {
  const { loading, value = {data:{results:[]}}, error } = useAsync(API.getUsers);
  if (loading || !value) return "loading..."; 
  console.log(value);
  return (
    <div>
      <Header />
      {/* <Sort /> */}
      <User />   
    </div>
  );
}

export default App;