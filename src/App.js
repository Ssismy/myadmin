import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home"
import UserList from "./pages/userList/UserList";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
      <Sidebar />
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/users" element={ <UserList />}/>
      <Route path="/user/:userId" element={ <User />}/>
      <Route path="/new-user" element={<NewUser />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/product/:productId" element={<Product />} />
      <Route path="/new-product" element={<NewProduct />} />
      </Routes>
      
      </div>
      
    </Router>
  );
}

export default App;
