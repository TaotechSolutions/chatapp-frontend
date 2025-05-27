import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthRegister from './pages/AuthRegister';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AuthRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
