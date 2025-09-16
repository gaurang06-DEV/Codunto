import React, { useState } from "react";
import Main from "./components/main";
import AddManually from "./components/AddManually";
import ScanRecipt from "./components/ScanRecipt";
import "./output.css";
import { BrowserRouter,Routes,Route} from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/manually" element={<AddManually />} />
          <Route path="/upload" element={<ScanRecipt />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
