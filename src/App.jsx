import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Quote from "./pages/Quote.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  );
}
