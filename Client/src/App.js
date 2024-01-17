import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>

        
        <Route path="/" element={<Land />} />
       




        {/* PRIVATE ROUTES BELOW THIS */}
        {/* <Route path="/private/*" element={<Private />}>
          
        </Route> */}

      </Routes>
    </Router>
  );
}

export default App;
