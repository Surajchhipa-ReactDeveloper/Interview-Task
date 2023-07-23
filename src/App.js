import { React, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ScreenRoutesLinks from "./RouterLinks/Routers";
import HomePage from "./Components/HomePage/HomePage";
import Abouts from "./Components/Abouts/Abouts";

const App = () => {
  return (
    <>
      <Router>
        <Suspense fallback={"Loading..."}>
          <Navbar />
          <Routes>
            {ScreenRoutesLinks.map((item, index) => {
              return (
                <Route
                  path={item.path}
                  name={item.name}
                  element={item.element}
                  key={index + item.path}
                ></Route>
              );
            })}
          </Routes>
        </Suspense>
      </Router>
      {/* ***************************** */}
      {/* <Navbar /> */}
      {/* <HomePage/> */}
      {/* <Abouts/> */}
    </>
  );
};

export default App;

{
  /* {ScreenRoutes((item, index) => {
              return (
                <Route
                  path={item.path}
                  name={item.name}
                  element={item.element}
                  key={index + item.path}
                ></Route>
              );
            })} */
}
