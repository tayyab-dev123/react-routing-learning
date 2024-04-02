import { Link, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";
import { Categories, Desktops, Laptops } from "./Components/Categories";
import Products from "./Components/Products";

export default function App() {
  return (
    <div>
      <nav className="bg-blue-500 p-6">
        <ul className="flex space-x-4">
          <li>
            <Link to="/login" className="text-white hover:text-gray-200">
              Login
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-white hover:text-gray-200">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/Categories" className="text-white hover:text-gray-200">
              Categories
            </Link>
          </li>
          <li>
            <Link to="/Products" className="text-white hover:text-gray-200">
              Products
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />}>
          <Route path="laptops" element={<Laptops />} />
          <Route path="desktops" element={<Desktops />} />
        </Route>
        <Route path="products/*" element={<Products />} />
      </Routes>
    </div>
  );
}
