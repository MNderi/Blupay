
import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { LandingPage } from './Components/lightversion';
function App() {
  return (

      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Landingpage" element={<LandingPage />}/>
      </Routes>
      
      </BrowserRouter>

  );
}

export default App;
