import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import List from "./Pages/List/List";
import Single from "./Pages/Single/Single";
import New from "./Pages/New/New";
import { productInputs, userInputs } from "./FormSource";
import "./Components/BackStyle/BackStyle.css"
import { useContext } from "react";
import { DarkModeContext } from "./Context/darkModeContext";

function App() {
  const {darkMode} = useContext(DarkModeContext)
  return (
    <>
    <div className={darkMode ? "dark_mode" : ""}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
            </Route>

            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs ={productInputs} title="Add New Products"  />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
    </>
  );
}

export default App;
