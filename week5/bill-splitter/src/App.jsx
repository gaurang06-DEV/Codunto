import React, { useState } from "react";
import BillSplitter from "./components/BillSplitter";
import AssignItems from "./components/AssignItem";
import FinalSummary from "./components/FinalSummary";
import "./output.css";
import { BrowserRouter,Routes,Route} from "react-router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BillSplitter />} />
          <Route path="/assign-items" element={<AssignItems />} />
          <Route path="/summary" element={<FinalSummary />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
