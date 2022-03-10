import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/homepage/HomePage";
import ShopPage from "./pages/shop/shop";

// const HatsPage = function () {
//   let navigate = useNavigate();
//   function handleClick() {
//     // <Navigate replace to={"/"} />;
//     navigate(-1);
//   }
//   // console.log(this.props.history);
//   return (
//     <div style={{ cursor: "pointer" }} onClick={handleClick}>
//       <h1>all hats</h1>
//       <Link to={"/"}>HomePage</Link>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
