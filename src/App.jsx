import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/blog/Create";
import Detail from "./pages/blog/Detail";
import NotFound from "./pages/NotFound";


export default function App(){


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/create" element={<Create />} />
      <Route path="/blog/detail/:id/:slug" element={<Detail />} />
      <Route path="*" element={<NotFound />} />

    </Routes>
  )
}