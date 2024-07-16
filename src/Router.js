import {
 Route,
 Routes
} from "react-router-dom";

import Home from "./Components/Home/Home.tsx";

function NavRoutes() {
 return (
  <Routes>

   <Route
    exact
    path="/"
    element={<Home />}
   />


  </Routes>
 )
}

export default NavRoutes;