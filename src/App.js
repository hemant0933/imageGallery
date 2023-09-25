import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import VideosPage from "./Pages/VideosPage";
import Leaderboard from "./Pages/Leaderboard";
import Challenges from "./Pages/Challenges";
import ErrorPage from "./Pages/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<VideosPage />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/challenges" element={<Challenges />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
