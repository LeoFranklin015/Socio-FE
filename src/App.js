import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import { useState } from "react";

function App() {
  const [profilepage, setProfilePage] = useState(false);

  return (
    <div className="App">
      <Router>
        <AllRoutes profilepage={profilepage} setProfilePage={setProfilePage} />
      </Router>
    </div>
  );
}

export default App;
