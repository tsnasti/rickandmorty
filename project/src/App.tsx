import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/main-page";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={MainPage} />
      </Routes>
    </BrowserRouter>
  );
}
