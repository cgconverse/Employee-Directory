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