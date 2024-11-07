import React, { useEffect, useState } from "react";
import { Icons } from "../../assets/icons";

const ModeCtrl = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {}, [
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark"),
  ]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleTheme}>
      <img
        src={darkMode ? Icons.SunFill : Icons.MoonFill}
        alt=""
        className="w-4 h-4 dark:invert-[1] dark:brightness-[100%] "
      />
    </button>
  );
};

export default ModeCtrl;
