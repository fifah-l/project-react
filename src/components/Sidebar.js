import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import SchoolIcon from '@mui/icons-material/School'; // Ikon untuk Data Guru
import ClassIcon from '@mui/icons-material/Class';  // Ikon untuk Data Siswa
import HomeIcon from '@mui/icons-material/Home';    // Ikon untuk Home

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h5>Menu Item</h5>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/" className="sidebar-link">
              <HomeIcon className="sidebar-icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/guru" className="sidebar-link">
              <ClassIcon className="sidebar-icon" />
              Data Guru
            </Link>
          </li>
          <li>
            <Link to="/siswa" className="sidebar-link">
              <SchoolIcon className="sidebar-icon" />
              Data Siswa
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
