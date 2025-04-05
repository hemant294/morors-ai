import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DummyHeader from './components/DummyHeader';
import AppRoutes from './routes/AppRoutes';
import videoBg from "../src/assets/video.mp4"
function App() {
  return (
    <div className="hero">
      <div className='overlay'></div>
      <video src={videoBg} autoPlay loop muted />
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
