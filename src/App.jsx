import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Pages with Navbar */}
        <Route path="/" element={<><Navbar /><Home /></>} />
        <Route path="/todo" element={<><Navbar /><Todo /></>} />

        {/* 404 - No Navbar, full immersive screen */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}