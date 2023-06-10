
// import { Link } from "react-router-dom";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import { FaUserShield,FaTrashAlt } from "react-icons/fa";

const ManageClass = () => {
    const [axiosSecure] = UseAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    });

    const handleMakeApprove = (item) => {
        fetch(`http://localhost:5000/classes/approve/${item._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${item.name} is approved now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
        }

        const handleMakeDeny = (item) => {
            fetch(`http://localhost:5000/classes/deny/${item._id}`, {
                method: 'PATCH'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${item.name} is denied now`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            }
        const handleMakeFeedback = (item) => {
            fetch(`http://localhost:5000/classes/feedback/${item._id}`, {
                method: 'PATCH'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modifiedCount) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${item.name} is sent feedback now`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
            }


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
                            <th>Make Approve</th>
                            <th>Denied</th>
                            <th>Make Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((item, i) => <tr
                                key={item._id}
                            >
                                <th>{i + 1}</th>
                                <td><img className="rounded w-14" src={item.image} alt="" /></td>
                                <td>{item.name}</td>
                                <td>{item.instructor}</td>
                                <td>{item.email ? item?.email : 'null'}</td>
                                <td>{item.seats}</td>
                                <td>{item.price}</td>
                                <td>{item.status}</td>                             
                                <td>
                                 {
                                        item.status == 'approve' ? 'approved' :
                                            <button onClick={() => handleMakeApprove(item)} className={`${item.status == 'deny'? 'hidden': ''} btn  btn-ghost bg-slate-600 text-white`}> <FaUserShield></FaUserShield></button>
                                    }
                                </td>

                                <td>
                                    {
                                        item.status == 'deny' ? 'denied' :
                                            <button onClick={() => handleMakeDeny(item)} className={`${item.status=='approve'? 'hidden': ''}  btn  btn-ghost bg-slate-600 text-white`}><FaTrashAlt></FaTrashAlt> </button>
                                    }                            
                                </td>                           
                                <td>
                                    {
                                        item.status == 'feedback' ? 'your class was denied due to lack of student' :
                                            <button onClick={() => handleMakeFeedback(item)} className={` ${item.status=='approve'? 'hidden': ''} btn  btn-ghost bg-slate-600 text-white`}>feedback </button>
                                    }                            
                                </td>                           
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageClass;