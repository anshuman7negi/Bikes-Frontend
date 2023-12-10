import Navbar from './components/Navbar';
import Bikes from './components/Bikes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBikes from './components/AddBikes';
import SingleBike from './components/SingleBike';
import Reserve from './components/Reserve';

function App() {

  return (
    <div className='flex'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Bikes />} />
          <Route path="/addBikes" element={<AddBikes />} />
          <Route path="/show/:id" element={<SingleBike/>} />
          <Route path="/reserve/:id" element={<Reserve/>} />
          <Route path="/reserve" element={<Reserve/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
