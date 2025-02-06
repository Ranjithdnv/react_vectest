import { useState, useContext, useEffect } from "react";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import { Navigate } from "react-router-dom";
//import Lazz from "./pages/layzboy/lazz";
import { Suspense, lazy } from "react";
import { CountContext } from "./context";
import Counters from "./pages/counters/counters";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parentmemo from "./pages/memo/parentmemo";

import Mt from "./pages/mt/mt";

import Homepage from "./pages/homepage";
import Login from "./pages/login/login";
import Cardz from "./componets/cardz";
import { StickyNavbar } from "./componets/navbarsticky";

// Lazy load the Lazz component
const Lazz = lazy(() => import("./pages/layzboy/lazz"));

function App() {
  const [count, setCount] = useState(0);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [c, sc] = useState(
    JSON.parse(localStorage.getItem("credentials")) || 0
  );

  useEffect(() => {
    // Get the stored credentials from localStorage
    console.log("useEffect triggered...");
    const storedCredentials = localStorage.getItem("credentials");
    console.log(localStorage.getItem("credentials"));
    console.log("useEffect triggered...");
    // Parse the JSON string back to an object and update state
    if (storedCredentials) {
      console.log("Retrieved from storage:", JSON.parse(storedCredentials));
      setCredentials(JSON.parse(storedCredentials));
    }
  }, []); // Runs only once when the component mounts

  console.log("uuuuuuuuuuuu");
  console.log(c.username_dress);
  console.log("git");

  return (
    <>
      <div>
        {/* <HashRouter> */}
        {/* <Router> */}

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* <Route> */}
            <Route
              path="/home"
              element={
                c.username_dress ? <Homepage /> : <Navigate to="/login" />
              }
            />
            <Route path="/count" element={<Counters />} />
            <Route path="/login" element={<Login />} />{" "}
            <Route path="/lazy" element={<Lazz />} />{" "}
            <Route path="/lazy" element={<Lazz />} />{" "}
            <Route path="/memo" element={<Parentmemo />} />
            <Route path="/card" element={<Cardz />} />
            <Route path="/sticky" element={<StickyNavbar />} />
            <Route path="/mt" element={<Mt />} />
            {/* </Route> */}
          </Routes>
        </Suspense>
        {/*  </Router>            router not needed in broser router is therer  */}
        {/* </HashRouter> */}
      </div>
    </>
  );
}

export default App;
