import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home setCount={setCount} count={count} />} />
          <Route
            index
            path="/"
            element={<Home setCount={setCount} count={count} />}
          />
          <Route
            path="profile"
            element={<Profile setCount={setCount} count={count} />}
          />
          <Route path="profile/:id" element={<Login />} />

          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>

      <h1>{count}</h1>
    </div>
  );
}

export default App;
