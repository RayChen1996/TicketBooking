import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AppNav from "./components/Layouts/Basic/AppNav";
import AppFooter from "./components/Layouts/Basic/AppFooter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppNav />

      <AppFooter />
    </>
  );
}

export default App;
