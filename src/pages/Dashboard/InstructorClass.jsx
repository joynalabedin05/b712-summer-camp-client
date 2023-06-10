import { useContext } from "react";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const InstructorClass = () => {
    const {user}  = useContext(AuthContext);
    const [axiosSecure]= UseAxiosSecure();

    const { data: users = [], } = useQuery(['classes', user?.email], async () => {
        const res = await axiosSecure.get(`/classes/${user.email}`)
        return res.data;
    });

    return (
        <div className="w-full">    
        <h3 className="text-3xl font-semibold">All Classes : {users.length}</h3>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Class Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Enrolled student</th>                     
                        <th>Feedback</th>
                        <th>Button</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i)=> <tr
                        key={user._id}
                        >
                            <td>{i+1}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>                       
                            <td>{user.status}</td>                       
                            <td>{user?.seats}</td>
                            <td>{user?.feedback}</td>
                            <td><Link className="bg-slate-500  text-white p-2 rounded">Update</Link></td>                           
                        </tr>)
                    }                
                </tbody>
            </table>
        </div>

        </div>
    );
};

export default InstructorClass;