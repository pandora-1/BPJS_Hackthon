import logo from './logo.svg';
import './App.css';
import Button from './components/button.jsx';
import Name from './components/name.jsx';

function App() {
  return (
    <div className="backgroundApp">
      <h1 className="titleApp">Selamat datang di layanan terpadu BPJS Kesehatan</h1>
      <Name />
      <Button />
    </div>
  );
}

export default App;
