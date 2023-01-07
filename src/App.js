import logo from './logo.png';
import './assets/styles/main.scss';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Home from './pages/home/home';
import NotFound from './pages/NotFound/NotFound';


function App() {
  return (
    <div className='body'>
      <div className="App">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
