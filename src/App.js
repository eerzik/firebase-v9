import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user, authIsReady } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={user ? <Home /> : <Login />}> </Route>
            <Route path="/signup" element={user ? <Home /> : <Signup />}> </Route>
            <Route path="/login" element={user ? <Home /> : <Login />}>  </Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
