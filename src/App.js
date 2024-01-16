import './App.css';
import NoPage from './view/Kerdezes';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Iras } from './pages/Iras';


function App() {
  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Layout />} >
                      <Route path="iras" element={<Iras />} />
                      <Route path="*" element={<NoPage />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
