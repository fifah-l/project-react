import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './Page/Dashboard';
import DataGuru from './Page/DataGuru';
import DataSiswa from './Page/DataSiswa';

import TambahGuru from './Page/TambahGuru';
import TambahSiswa from './Page/TambahSiswa';
import EditGuru from './Page/EditGuru';
import EditSiswa from './Page/EditSiswa';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/guru" element={<DataGuru />} />
            <Route path="/siswa" element={<DataSiswa />} />
            <Route path="/TambahGuru" element={<TambahGuru />} />
            <Route path="/TambahSiswa" element={<TambahSiswa />} />
            <Route path="/EditGuru/:id" caseSensitive={false} element={<EditGuru />} />
            <Route path="/EditSiswa/:id" caseSensitive={false} element={<EditSiswa />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
