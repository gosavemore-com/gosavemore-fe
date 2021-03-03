import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PrivateRoute from "./util/privateRoute";
import Profile from "./pages/Profile";
import CategoriesRenderer from "./components/CategoriesRenderer";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";

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
            <Route path="/cart/:id?" component={Cart} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/shipping" component={Shipping} />
            <PrivateRoute path="/payment" component={Payment} />
            <PrivateRoute path="/placeorder" component={PlaceOrder} />
            <PrivateRoute path="/order/:id" component={Order} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
