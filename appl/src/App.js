import React from "react";
import Home from "./pages/home/Home"
import List from "./pages/list/List"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Hotel from "./pages/hotel/Hotel";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hotels" element={<List />}></Route>
        <Route path="/hotels/:id" element={<Hotel />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
