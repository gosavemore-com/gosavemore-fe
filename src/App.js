import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./util/PrivateRoute";
import Profile from "./pages/Profile";
import CategoriesRenderer from "./components/CategoriesRenderer";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route
              path="/categories/:category"
              component={CategoriesRenderer}
            />
            <Route path="/product/:id" component={ProductDetails} />
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/cart/:id?" component={Cart} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
