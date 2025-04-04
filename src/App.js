import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DummyHeader from './components/DummyHeader';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div>
      <DummyHeader />
      <div className='hero-header'>
        <Header />
      </div>
      <div className="hero-overlay">

      </div>
      <div className="main-content">
        <AppRoutes />
      </div>

      <div className='hero-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
