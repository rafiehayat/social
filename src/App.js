import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    // <Router>
    //   <Routes>
    //     <Route exact path="/" element={<Home />} />
    //     <Route path="/Login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/profile" element={<Profile />} />
    //     <Route path="/profile/:username" element={<Profile />} />
    //   </Routes>
    // </Router>
    // <Router>
    //   <Routes>
    //     <Route exact path="/">
    //       {user ? <Home /> : <Register />}
    //     </Route>
    //     <Route path="/login">{user ? <Navigate to="/" /> : <Login />}</Route>
    //     <Route path="/register">
    //       {user ? <Navigate to="/" /> : <Register />}
    //     </Route>
    //     <Route path="/profile/:username">
    //       <Profile />
    //     </Route>
    //   </Routes>
    // </Router>

    <Router>
      <Routes>
        <Route exact path="/" element={user ? <Home /> : <Register />} />
        <Route path="/Login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <Register />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
