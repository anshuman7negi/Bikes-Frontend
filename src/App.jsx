import Navbar from './components/Navbar';
import Bikes from './components/Bikes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBikes from './components/AddBikes';
import SingleBike from './components/SingleBike';
import Reserve from './components/Reserve';
import DeleteBike from './components/DeleteBike';
import ReservationList from './components/ReservationList';

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
          <Route path="/delete" element={<DeleteBike/>} />
          <Route path="/reservations" element={<ReservationList/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
