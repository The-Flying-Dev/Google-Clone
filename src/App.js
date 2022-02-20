import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  //Switch has been upgraded to Routes
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/*<Route path='/search' element={<SearchPage /> }></Router>*/}
          <Route path="/" element={<Home />} />
                       
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
