import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './Page/Dashboard';
import DataSiswa from './Page/DataSiswa';
import DataGuru from './Page/DataGuru';
import TambahGuru from './Page/TambahGuru';
import TambahMurid from './Page/TambahSiswa';
import EditGuru from './Page/EditGuru';
import EditMurid from './Page/EditSiswa';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/siswa" element={<DataSiswa />} />
            <Route path="/guru" element={<DataGuru />} />
            <Route path="/tambahguru" element={<TambahGuru />} />
            <Route path="/tambahsiswa" element={<TambahMurid />} />
            <Route path="/editguru/:id" element={<EditGuru />} />
            <Route path="/editsiswa/:id" element={<EditMurid />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;