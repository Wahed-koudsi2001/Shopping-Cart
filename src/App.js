import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
}
  from "react-router-dom"
import './index.css';
import { useState } from "react"


import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Shop from "./Pages/Shop";
import { createContext } from "react";
import Price from "./Pages/Price";
import Blog from "./Pages/Blog";

export const SharingInfo = createContext(null);

function App() {

  const [data, setData] = useState([]);

  const [coutCart, setCountCart] = useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<NavBar coutCart={coutCart} />} >
        <Route index element={<Hero />} />
        <Route path="shop" element={<Shop setCountCart={setCountCart} />} />
        <Route path="priceing" element={<Price />} />
        <Route path="blog" element={<Blog />} />
      </Route>
    )
  )


  return (
    <SharingInfo.Provider value={{ data, setData }}>
      <RouterProvider router={router} />
    </SharingInfo.Provider>
  );
}
export default App;