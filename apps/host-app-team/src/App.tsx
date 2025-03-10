import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Navbar from './components/navbar/Navbar';
import MFELoader from './components/mfe-loader/MFELoader';
import DashboardPage from './pages/DashboardPage';

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/protected">
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="janus/*" element={<MFELoader />} />
              <Route path="jupiter/*" element={<MFELoader />} />
            </Route>
          </Routes>
      </Router>
    </>
  );
};

export default App;
