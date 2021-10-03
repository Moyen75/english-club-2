import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header/Header';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MainHeader></MainHeader>
    </div>
  );
}

export default App;
