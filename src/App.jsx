import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="app-container">
      <div className="card">

        <div className="card-body">
          <h5 className="card-title">Counter</h5>
          <h3 className="counter-value">COUNTER VALUE IS: 0</h3>
          <div className="list-group list-group-flush">
            <button type="button" className="btn btn-primary">+1</button>
            <button type="button" className="btn btn-secondary">-1</button>
            <button type="button" className="btn btn-danger">Privacy Toggle</button>
          </div>
          <div className="input-section">
            <input type="text" placeholder="Enter the number" className="form-control" />
            <div className="action-buttons">
              <button type="button" className="btn btn-success">Add</button>
              <button type="button" className="btn btn-info">Subtract</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
