import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { routes } from "./configs/config";
import ProductPage from "./pages";
import "@styles/style.css";

function App() {
  return (
    <BrowserRouter>
      <Route path={routes.items.mask} component={ProductPage} />
      <Redirect to={routes.items.mask} />
    </BrowserRouter>
  );
}

export default App;
