
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ToDoList from "./components/ToDoList";
import Movie from "./components/Movie";
import { ShopContexProvider } from "./Context/Shop-Context";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import Contact from "./components/Contact";

function App() {
  return (
    <>
    <ShopContexProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/todo" element={<ToDoList />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      </ShopContexProvider>
    </>
  );
}

export default App;
