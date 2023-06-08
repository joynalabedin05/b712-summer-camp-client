
import { Link } from 'react-router-dom';
import logo from '../../assets/logo2.jpg'
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error);
            })
    };


    const navItems = <>
        <li className='uppercase font-bold'><Link to='/'>Home</Link></li>
        <li className='uppercase font-bold'><Link to='/instructor'>Instructors</Link></li>
        <li className='uppercase font-bold'><Link to='/class'>Classes</Link></li>
        {
            user && <li className='uppercase font-bold'><Link to='/dashboard'>Dashboard</Link></li>
        }
        
        {
            user ? <div className='flex '>
                <span className=' uppercase font-bold'><img className='rounded w-12' src={user?.photoURL} alt="" /></span>
                <button  className="btn btn-ghost uppercase font-bold" onClick={handleLogout}>LOGOUT</button>
            </div> :
                <div>
                    <li className=' uppercase font-bold'><Link to='/login'>LOGIN</Link></li>
                </div>
        }
    </>

    return (
        <div className="navbar bg-base-100  max-w-screen-xl my-5  mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <div className='flex'>
                        <img className='w-12 rounded-full' src={logo} alt="" />
                        <div className=''>
                            <h3 className="md:text-3xl">ACADEMY OF ART UNIVERSITY</h3>
                            <p className="md:uppercase text-sm">Defy the ordinary , create the extra ordinary</p>
                        </div>
                    </div>
                </a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;