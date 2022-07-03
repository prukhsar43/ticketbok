import './App.css';
import FrontPage from './pages/FrontPage';
import {
  Routes,
  Route,
} from "react-router-dom";
import TimingLayout from './components/Movie Timings/TimingLayout';
import MapNewSeat from './components/NewSeat/MapNewSeat';
import FinalBook from './components/FinalBook/FinalBook';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="Movie" element={<TimingLayout/>} />
        <Route path="ticket" element={<MapNewSeat/>} />
        <Route path="final" element={<FinalBook/>} />
      </Routes>
    </>
  );
}

export default App;
