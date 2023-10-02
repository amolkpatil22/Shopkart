import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { AllRoutes } from './components/AllRoutes';
import { Footer } from './pages/Home/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
