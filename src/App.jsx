import { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

import Navbar from './Components/Navbar.jsx';
import WelcomeScreen from './Components/welcome.jsx';
import AllRoutes from './Setroutes.jsx';
import Contact from './Components/Contact.jsx'; // ✅ Renamed file for consistency
import Footer from './Components/footer.jsx';
import  ProjectDetail  from "./Components/project"

function App() {
  const [showMainContent, setShowMainContent] = useState(false);
  
  useEffect(() => {
    const runSplashscreen = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setShowMainContent(true);
    };

    runSplashscreen();
  }, []);

  return (
    <>
      {!showMainContent ? (
        <WelcomeScreen />
      ) : (
        <Router>
          <Navbar />
          <AllRoutes />
         
          <Footer />
        </Router>
      )}
    </>
  );
} 
  
export default App;
