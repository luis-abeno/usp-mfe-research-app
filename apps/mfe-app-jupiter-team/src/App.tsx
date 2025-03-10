import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Material from './pages/Materials';
import Navbar from './components/Navbar';
import { qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

const App: React.FC = () => {
  const basename = qiankunWindow.__POWERED_BY_QIANKUN__
    ? import.meta.env.VITE_PATH_MFE
    : '/';

  return (
    <>
      <Router basename={basename}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/material" element={<Material />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
