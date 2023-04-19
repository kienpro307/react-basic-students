import "./App.scss";
import Home from "./Function/Home";
import Add from "./Function/Add";
import Delete from "./Function/Delete";
import Update from "./Function/Update";
import ShowAll from "./Function/ShowAll";
import Search from "./Function/Search";
import Nav from "./Nav/Nav";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/show-all" element={<ShowAll />} />
            <Route path="/add" element={<Add />} />
            <Route path="/delete" element={<Delete />} />
            <Route path="/update" element={<Update />} />
            <Route path="/search/" element={<Search />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
