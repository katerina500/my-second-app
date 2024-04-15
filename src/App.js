import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import News from './News/News';
import Sport from './Sport/Sport';

export default function App() {
  return (
    <div className="App">
      <h1>TheGuardian</h1>
      <div className='router-nav-container'>
        <nav className='navigation-menu'>
          <div>
            <Link to="/news">Новости</Link>
          </div>
          <div>
            <Link to="/sport">Спорт</Link>
          </div>
        </nav>
      </div>
    <Routes>
      <Route path='/news' element={<News />} />
      <Route path='/sport' element={<Sport />} />
    </Routes>
    </div>
  );
}
