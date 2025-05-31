import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Controls from './components/Controls';
import DisplayCounter from './components/DisplayCounter';
import PrivacyMessage from './components/PrivacyMessage';
import { useSelector } from 'react-redux';

const App = () => {
  const privacy = useSelector((store) => store.privacy);

  return (
    <div className="app-container">
      <div className="card">
        <div className="card-body">
          <Header />
          {privacy ? <PrivacyMessage /> : <DisplayCounter />}
          <Controls />
        </div>
      </div>
    </div>
  );
}

export default App;
