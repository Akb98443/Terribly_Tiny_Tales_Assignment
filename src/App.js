import './App.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Button from './components/Button';
import Data from './components/Data';
function App() {

  return (
    <div className="App">
    <Router>  
      <Routes>
        <Route path="/" element={<Button/>}/>
        <Route path="/histogram" element={ <Data/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;