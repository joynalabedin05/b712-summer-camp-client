import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaBook,FaSchool,FaCartPlus,FaCalendarWeek, FaUser, FaUsers, FaShoppingCart } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useCart from "../hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mx-6 mt-5">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side py-5">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-orange-100">
          {/* Sidebar content here */}
          {
            isAdmin ?
              <>
                <li>
                  <NavLink to='/dashboard/allusers'><FaUsers /> All Users</NavLink>
                </li>
                <li>
                  <NavLink to='/dashboard/manageclass'><FaCalendarWeek /> Manage Classes</NavLink>
                </li>

              </> :
              isInstructor ?
                <>

                  <li>
                    <NavLink to='/dashboard/addclass'><FaSchool /> Add A Class</NavLink>
                  </li>
                  <li>
                    <NavLink to='/dashboard/instructorclass'><FaCartPlus /> Approved Class</NavLink>
                  </li>
                </> :

                <>
                  <li>
                    <NavLink to='/dashboard/mycart'><FaShoppingCart /> My Classes <span className="badge badge-secondary">{cart?.length || 0}</span></NavLink>

                  </li>
                  <li>
                    <NavLink to='/dashboard/paymenthistory'><FaBook /> Payment History</NavLink>
                  </li>
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