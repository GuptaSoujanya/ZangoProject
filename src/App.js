import './App.css';
import  {useState, useEffect }from 'react';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2'


function App() {
  const [currentNavbar, setCurrentNavbar] = useState('Navbar');

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the current navbar after 10 seconds
      setCurrentNavbar(currentNavbar === 'Navbar' ? 'Navbar2' : 'Navbar');
    }, 8000); // Change navbar every 10 seconds

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [currentNavbar]); // Re-run effect when currentNavbar changes

  return (
    <div>
      {currentNavbar === 'Navbar' ? <Navbar /> : <Navbar2 />}
    </div>
    );
}

export default App;