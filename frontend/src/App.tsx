import { Link, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage.tsx";
import EvolutionPage from "./pages/evolutionPage.tsx";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Back HomePage !</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<EvolutionPage />} />
      </Routes>
    </>
  );
}

export default App;
