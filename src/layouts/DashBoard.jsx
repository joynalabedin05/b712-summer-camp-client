import { NavLink, Outlet } from "react-router-dom";
import { FaShoppingCart, FaWallet,FaCalendarAlt, FaUtensils, FaHome, FaBook, FaUsers, FaUser } from 'react-icons/fa';

const DashBoard = () => {
    
    return (
        <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
          <Outlet></Outlet>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
            <li><a>Sidebar Item 2</a></li>
            <li><a>Sidebar Item 2</a></li>
            <div className="divider"></div>
            <li><NavLink to='/'><FaHome /> Home</NavLink></li>
            <li><NavLink to='/instructor'><FaUser /> Instructors</NavLink></li>
            <li><NavLink to='/class'><FaBook /> Classes</NavLink></li>
          </ul>
        </div>
      </div>
    );
};

export default DashBoard;