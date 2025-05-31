import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Controls from './components/Controls';
import DisplayCounter from './components/DisplayCounter';

const App = () => {
  return (
    <div className="app-container">
      <div className="card">
        <div className="card-body">
          <Header />
          <DisplayCounter />
          <Controls />
        </div>
      </div>
    </div>
  );
}

export default App;
