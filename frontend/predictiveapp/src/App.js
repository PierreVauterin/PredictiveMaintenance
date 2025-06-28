import "./styles.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import NoPage from "./Pages/NoPage";
import Sensors from "./Pages/Sensors";
import Rul from "./Pages/Rul";
import Dashboard from "./Pages/Dashboard"
import Configuration from "./Pages/Configuration";
import GraphPage from "./Pages/GraphPage";
import DataPage from "./Pages/DataPage"

import { TotalHeader } from "./Components/Drawer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TotalHeader/>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/rul" element={<Rul />} />
          <Route path="/sensors" element={<Sensors />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/graphpage" element={<GraphPage />} />
          <Route path="/config" element={<Configuration />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/datapage" element={<DataPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
