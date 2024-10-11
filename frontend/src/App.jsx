import { useEffect, useState} from 'react';
import { Route, Routes } from "react-router-dom";

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CrewsPage from './pages/CrewsPage';
import PiratesPage from './pages/PiratesPage'

function App() {
  
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  useEffect(() => {

    if(isDarkModeOn){

      document.body.classList.add("dark")

    } else {

      document.body.classList.remove("dark")

    }

    
  },[isDarkModeOn]);


  return (
    <div className=' w-screen bg-wood-light dark:bg-wood-dark  text-wood-dark dark:text-slate-200'>
      <NavBar 
        setIsDarkModeOn={setIsDarkModeOn}
        isDarkModeOn={isDarkModeOn}
      />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/crews" element={<CrewsPage />} />
        <Route path="/pirates" element={<PiratesPage />} />
      </Routes>
    </div>
  )
};

export default App
