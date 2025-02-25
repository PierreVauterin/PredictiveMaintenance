import { Routes, Route, BrowserRouter } from "react-router-dom";
import NoPage from "./Pages/NoPage";
import Home from "./Pages/Home";

import { TotalHeader } from "./Components/Drawer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TotalHeader/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
