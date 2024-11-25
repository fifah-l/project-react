import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/sidebar.css';
import SchoolIcon from '@mui/icons-material/School'; // Ikon untuk Data Guru
import ClassIcon from '@mui/icons-material/Class';  // Ikon untuk Data Siswa
import HomeIcon from '@mui/icons-material/Home';    // Ikon untuk Home
import MenuIcon from '@mui/icons-material/Menu';    // Hamburger Menu Icon
import CloseIcon from '@mui/icons-material/Close';  // Close Icon

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);

  };

  const closeSidebar = () => {
    setIsOpen(false); // Pastikan hanya menutup sidebar tanpa mencegah default behavior
  };
  

  return (
    <>
      {/* Button untuk membuka sidebar */}
      {!isOpen && (
        <button className="open-sidebar-button" onClick={toggleSidebar}>
          <MenuIcon />
        </button>
      )}

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <h5>Menu Item</h5>
          {/* Button untuk menutup sidebar */}
          <button className="close-sidebar-button" onClick={toggleSidebar}>
            <CloseIcon />
          </button>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
            <Link to="/" className="sidebar-link" onClick={closeSidebar}>
              <HomeIcon className="sidebar-icon" />
              Home
            </Link>
            <Link to="/guru" className="sidebar-link" onClick={closeSidebar}>
              <ClassIcon className="sidebar-icon" />
              Data Guru
            </Link>
            <Link to="/siswa" className="sidebar-link" onClick={closeSidebar}>
              <SchoolIcon className="sidebar-icon" />
              Data Siswa
            </Link>


            </li>
          </ul>
        </nav>
      </div>
      {/* Overlay untuk menutup sidebar */}
      <div
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={closeSidebar}
      ></div>
    </>
  );
};

export default Sidebar;
