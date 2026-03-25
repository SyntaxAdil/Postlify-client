import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/posts" element={<Posts />} />
    </Routes>
  );
};

export default App;
