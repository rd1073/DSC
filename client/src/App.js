import './App.css';
import Home from './pages/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Team from './pages/team';
import Events from './pages/events';
   
function App() {
  return (
    <div className="App" >
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Team />} />
            <Route path="/events" element={<Events />} />


          </Routes>
        </div>
      </Router>

     </div>
  );
}

export default App;
