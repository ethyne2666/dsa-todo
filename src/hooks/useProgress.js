import { useState, useEffect } from "react";

const STORAGE_KEY = "dsa-todo-progress";

export function useProgress() {
  const [progress, setProgress] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const toggle = (problemId, userIdx) => {
    const key = `${problemId}-${userIdx}`;
    setProgress((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const reset = () => {
    if (confirm("Reset ALL progress? This cannot be undone.")) {
      setProgress({});
    }
  };

  return { progress, toggle, reset };
}