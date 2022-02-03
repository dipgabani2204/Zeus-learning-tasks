import './App.css';
import Profile from "./components/Profile"
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <div className="data">
        <Profile />
        <MainContent />
        <Footer />
      </div>
    </div>
  )
}

export default App;
