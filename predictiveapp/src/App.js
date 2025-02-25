import "./styles.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import NoPage from "./Pages/NoPage";
import Home from "./Pages/Home";
import Sensors from "./Pages/Sensors";
import Configuration from "./Pages/Configuration";
import GraphPage from "./Pages/GraphPage";

import { TotalHeader } from "./Components/Drawer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TotalHeader/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sensors" element={<Sensors />} />
          <Route path="/graphpage" element={<GraphPage />} />
          <Route path="/config" element={<Configuration />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
