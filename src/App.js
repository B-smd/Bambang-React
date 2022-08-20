import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Portfolio</h1>
      <h2>Author: Bambang</h2>
      <img src={`${process.env.PUBLIC_URL}img/bs.jpeg`} alt="bs" />
    </div>
  );
}

export default App;
