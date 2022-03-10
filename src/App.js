import "./App.css";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";

const HatsPage = function () {
  let navigate = useNavigate();
  function handleClick() {
    // <Navigate replace to={"/"} />;
    navigate(-1);
  }
  // console.log(this.props.history);
  return (
    <div style={{ cursor: "pointer" }} onClick={handleClick}>
      <h1>all hats</h1>
      <Link to={"/"}>HomePage</Link>
    </div>
  );
};

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
