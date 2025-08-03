import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./escolha-de-cores/App";
// import Cadastro from "./cadastro/Cadastro";
// import Sobre from "./sobre/Sobre";

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="/cadastro" element={<Cadastro />} /> */}
        {/* <Route path="/sobre" element={<Sobre />} /> */}
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

createRoot(elem).render(app);
