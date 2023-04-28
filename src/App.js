import "./custom.scss";
import { HashRouter, Routes, Route } from "react-router-dom";
import appData from "./data/data.json";
import { DataContext } from "./DataContext.js";
import NavPanel from "./components/NavPanel";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import BookView from "./pages/BookView";

function App() {
  return (
    <DataContext.Provider value={appData}>
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <NavPanel />
          </header>
          <Routes basename={"/kitaphana"}>
            <Route path="/" element={<Main />} />
            <Route path="/book/:bookNumber" element={<BookView />} />
          </Routes>
          <footer>
            <Footer />
          </footer>
        </div>
      </HashRouter>
    </DataContext.Provider>
  );
}

export default App;
