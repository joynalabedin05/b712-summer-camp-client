import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaBook, FaUser, FaUsers } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <div className="drawer lg:drawer-open my-10">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-orange-100">
          {/* Sidebar content here */}
          {
            isAdmin ?
              <>
                <li>
                  <NavLink to='/dashboard/allusers'><FaUsers /> All Users</NavLink>
                </li>
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
              </> :
              isInstructor ?
                <>

                  <li><a>Sidebar Item 3</a></li>
                  <li><a>Sidebar Item 4</a></li>
                </> :

                <>
                  <li><a>Sidebar Item 5</a></li>
                  <li><a>Sidebar Item 6</a></li>
                </>
          }




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