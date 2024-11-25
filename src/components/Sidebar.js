import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    console.log('Sidebar is now:', !isOpen ? 'Open' : 'Closed');
  };
  

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h5>Menu Item</h5>
        <MenuIcon className="sidebar-toggle" onClick={toggleSidebar} />
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
