import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";


function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Search />} />
              <Route path="/favorites" element={<Favorites />} />
          </Routes>
      </Router>
  );
}

export default App;
