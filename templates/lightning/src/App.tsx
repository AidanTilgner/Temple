import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import SecondPage from "./pages/Second";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/second" element={<SecondPage />} />
    </Routes>
  );
}
