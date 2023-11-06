import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// import Home from './Pages/Home';
import Services from './Pages/Services';
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Home />}></Route> */}
      <Route path='/' element={<Services />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
