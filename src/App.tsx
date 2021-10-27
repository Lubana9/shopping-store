import ShoppingCard from "@components/card";
import InputGroup from "@components/InputGroup/InputGroup";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { routes } from "./configs/config";
import ProductPage from "./pages";
import HomPage from "./pages/HomePage";
import "@styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Route path={routes.items.mask} component={HomPage} />
      <Route path={routes.items.mask1} component={ProductPage} />
      <Redirect to={routes.items.mask} />
    </BrowserRouter>
  );
}

export default App;
