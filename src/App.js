import "./App.css";
import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";

function App() {
  return (
    <div className="App">
      <Router>
        <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
