import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Abouts from "./Pages/Abouts";
import Pages from "./Pages/Pages";
import News from "./Pages/News";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Search from "./Pages/Search";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/about"
                        element={<Abouts />}
                        category="abouts"
                    />
                    <Route path="/pages" element={<Pages />} category="pages" />
                    <Route path="/news" element={<News />} category="newss" />
                    <Route
                        path="/contact"
                        element={<Contact />}
                        category="contacts"
                    />
                    <Route path="/shop" element={<Shop />} category="shops" />
                    <Route path="/cart" element={<Cart />} category="carts" />
                    <Route
                        path="/search"
                        element={<Search />}
                        category="searchs"
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
