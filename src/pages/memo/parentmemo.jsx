import React, { useState, useMemo, useCallback, useContext } from "react";

const ThemeContext = React.createContext();

const Child = React.memo(({ handleClick, config }) => {
  console.log("Child rendered!");
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>Config: {config.value}</p>
    </div>
  );
});

function Parentmemo() {
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  // Memoize theme to avoid unnecessary re-renders
  const themeValue = useMemo(() => theme, [theme]);

  // Memoize config so it's not recreated every render
  const config = useMemo(() => ({ value: "Optimized Config" }), []);

  // useCallback ensures handleClick remains stable across renders
  const handleClick = useCallback(() => {
    console.log("Button clicked!");
    setCount((prev) => prev + 1);
  }, []);

  return (
    <ThemeContext.Provider value={themeValue}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
      <p>Current theme: {theme}</p>
      <Child handleClick={handleClick} config={config} />
      <p>Count: {count}</p>
    </ThemeContext.Provider>
  );
}

export default Parentmemo;
