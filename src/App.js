// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Banner } from "./components/banner/Banner";
import { Footer } from "./components/footer/Footer";
import NoPage from "./components/noPage/NoPage";
import { SearchPage } from "./components/searchPage/SearchPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/search"
            element={
              <>
                <SearchPage />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <NoPage />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
