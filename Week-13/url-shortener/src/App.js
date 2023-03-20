import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Home />}  />
          <Route path='/feature' element={<h1>This is features page.</h1>}  />
          <Route path='/pricing' element={<h1>This is pricing page.</h1>}  />
          <Route path='/resources' element={<h1>This is resources page.</h1>}  />
          <Route path='/login' element={<h1>This is login page.</h1>}  />
          <Route path='/signup' element={<h1>This is signup page.</h1>}  />
        </Route>
        <Route path='*' element={<h1>No Page Found!</h1>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
