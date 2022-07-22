import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as React from "react";
import "./App.css";
import Jobs from "./pages/Jobs";
import Create from "./pages/Create";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Company from "./pages/Company";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Jobs />}></Route>
            <Route exact path="create" element={<Create />}></Route>
            <Route exact path="login" element={<Login />}></Route>
            <Route exact path="signup" element={<SignUp />}></Route>
            <Route exact path="company/job" element={<Company />}></Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}
export default App;
