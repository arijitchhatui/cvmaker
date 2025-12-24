import { BrowserRouter, Route, Routes } from "react-router";

import CreateCvPage from "./pages/CreateCv";
import HomePage from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateCvPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
