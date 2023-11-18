//imports
import React from 'react';
import PageNotFound from './otherpages/errorPage.js';
import Main from './otherpages/userSearch.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//main app function with ROUTES
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<PageNotFound></PageNotFound>} />
        <Route path='/' element={<Main></Main>} />
      </Routes>
    </BrowserRouter>
  );
}
//Exporting Main App function
export default App;