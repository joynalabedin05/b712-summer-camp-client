import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const ManageClass = () => {
    const [classes, setClasses] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[])
    return (
        <div className="w-full bg-slate-100 py-5">    
        <h3 className="text-3xl font-semibold">Total Classes: {classes.length}</h3>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class IMG</th>
                        <th>Class Name</th>
                        <th>Instructor</th>
                        <th> Email</th>
                        <th>Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Approved</th>
                        <th>Denied</th>
                        <th>Feedback</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map((user, i)=> <tr
                        key={user._id}
                        >
                            <th>{i+1}</th>
                            <td><img className="rounded w-14" src={user.image} alt="" /></td>                         
                            <td>{user.name}</td>
                            <td>{user.instructor}</td>
                            <td>{user.email? user?.email : 'email'}</td>
                            <td>{user.seats}</td>
                            <td>{user.price}</td>
                            <td>{user.status? user.status: 'pending'}</td>
                            <td><Link to='/' className="bg-slate-700  text-white p-2 rounded">Approve</Link></td>
                            <td><Link to='/' className="bg-slate-700  text-white p-2 rounded">Deny</Link></td>
                            <td><Link to='/' className="bg-slate-700  text-white p-2 rounded">Feedback</Link></td>
                        </tr>)
                    }
                   
                  
                </tbody>
            </table>
        </div>

        </div>
    );
};

export default ManageClass;