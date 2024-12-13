import React from 'react';
import './Navbar.css';
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { BsCreditCard } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import TestLogo from './TestLogo.svg';
import snwoman from './snwoman.png';


const Navbar = () => {
  const activeItem = 'Patients';

  return (
    <nav className="navbar-container">

      <div className="logo">
        <img src={TestLogo} alt="Tech Care Logo" className="logo" />
      </div>
      <ul className="nav-items">
        <li className={`nav-item ${activeItem === 'Overview' ? 'active' : ''}`}> <IoHomeOutline /> Overview</li>
        <li className={`nav-item ${activeItem === 'Patients' ? 'active' : ''}`}> <MdOutlinePeopleAlt /> Patients</li>
        <li className={`nav-item ${activeItem === 'Schedule' ? 'active' : ''}`}> <CiCalendar /> Schedule</li>
        <li className={`nav-item ${activeItem === 'Message' ? 'active' : ''}`}> <FiMessageSquare /> Message</li>
        <li className={`nav-item ${activeItem === 'Transactions' ? 'active' : ''}`}> <BsCreditCard /> Transactions</li>
      </ul>
      <div className="user-info">
        <div className="icon">
          <img src={snwoman} alt="Tech Care Logo" className="logo" />
        </div>
        <div className="user-details">
          <span className="user-name"> Dr. Jose Simmons  </span>
          <div className="user-role"><span >General Practitioner</span></div>
        </div>
      </div>
     <div><IoSettingsOutline /> <BsThreeDotsVertical /></div>
      
    </nav>
  );
};

export default Navbar;
