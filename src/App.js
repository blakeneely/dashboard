import './App.css';
import ConcForm from './Components/ConcForm/ConcForm.js';
import Header from './Components/Header/Header.js';
import Chart from './Components/Chart/Chart.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className='App'>
      <Header />
      <ConcForm />
      <Chart />
      <Footer />
    </div>
  );
}

export default App;
