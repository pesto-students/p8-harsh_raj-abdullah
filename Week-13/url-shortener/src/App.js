import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}  />
        <Route path='/pl' element={<h1>H1</h1>}  />
        <Route path='/p/l' element={<h1>H2</h1>}  />
        <Route path='*' element={<h1>No Page Found!</h1>}  />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
