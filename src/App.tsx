import ShoppingCard from "@components/card";
import InputGroup from "@components/InputGroup/InputGroup";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { routes } from "./configs/config";
import HomPage from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Route path={routes.items.mask} component={HomPage} />
      <Redirect to={routes.items.mask} />
    </BrowserRouter>
  );
}

export default App;
