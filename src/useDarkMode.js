import { useEffect, useState } from "react";

const useDarkMode = () => {
  // Retrieve the saved theme from local storage or default to light
  const initialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : "light";
  };

  const [theme, setTheme] = useState(initialTheme());

  // Function to toggle light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", JSON.stringify(newTheme)); // Save to local storage
  };

  // Applying theme to document body
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return [theme, toggleTheme];
};

export default useDarkMode;
