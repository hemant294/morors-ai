import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DummyHeader from './components/DummyHeader';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="hero">
      <div className="hero-overlay"></div>
      <div className="main-content">
        <DummyHeader />
        <div className='hero-header pt-4'>
          <Header />
        </div>
        <AppRoutes />
        <div className='hero-footer'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
