import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/search'>
            {/*SearchPage */}
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
