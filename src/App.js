import './App.css';
import News from './News/News';

export default function App() {
  return (
    <div className="App">
     <div className='container'>
     <h1>Получите самые свежие новости от газеты</h1>
     <span className='header'>The Guardian</span>
     <h2>Укажите ключевое слово и наслаждайтесь.</h2>
    </div>
    <div> <News /> </div>
    </div>
  );
}
