import Navbar from './components/Navbar';
import Bikes from './components/Bikes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBikes from './components/AddBikes';

function App() {

  return (
    <div className='flex'>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Bikes />} />
          <Route path="/addBikes" element={<AddBikes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
