import { useEffect, useState } from "react";

const usePersistedState = (key, initialState) => {
  const [todos, setTodos] = useState(() => {
    const storage = localStorage.getItem(key);

    if (storage) {
      return JSON.parse(storage);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos));
  }, [key, todos]);

  return [todos, setTodos];
};

export default usePersistedState;
