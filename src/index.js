import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import {
    Routes,
    Route,
  } from "react-router-dom";
import App from "./App";
import Grill from './routes/grill';
import Hotline from './routes/hotline';
import Outside from './routes/outside_cafe';

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Grill" element={<Grill />} />
      <Route path="Hotline" element={<Hotline />} />
      <Route path="Outside" element={<Outside />} />
    </Routes>
  </BrowserRouter>)