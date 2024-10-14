
import React, {useState} from "react"; 
import  { BrowserRouter as Router, Route, Routes , Navigate } from 'react-router-dom';
import Header from './components/Header';

import Hero from "./components/Hero";
import Work from "./components/Work";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Login from "./Auth/login";
import Signup from "./Auth/Signup";
import Dashboard from "./AfterLogin/Dashboard";
import BulkEntry from "./AfterLogin/BulkEntry";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([]); // Array to store registered users

  const handleSignup = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleLogin = (username, password) => {
    const userExists = users.find(
      (user) => user.username === username && user.password === password
    );
    if (userExists) {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };
  return (
    <Router>
    <Header />
 
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={<Signup onSignup={handleSignup} />}
        /> 
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        /> 
        <Route path="/bulkentry" element={<BulkEntry />} />
  
    
        
        <Route path="*" element={<Navigate to="/login" />} />
       
        

   </Routes>
    <Footer />
  </Router>
);
};
const Home = () => {
  return (
    <>
    
      <Hero />
      <Work />
      <div className="spacer"></div> {/* Spacer div for colored margin */}
      <Features />
    </>
  );
};

export default App;



