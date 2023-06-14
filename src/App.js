import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />   
            <Routes>
              <Route path="/" element={<Home />}> </Route>
              <Route path="/signup" element={<Signup />}> </Route>
              <Route path="/login" element={<Login />}>  </Route>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
