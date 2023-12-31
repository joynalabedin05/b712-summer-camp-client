
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { useQuery } from "react-query";

// import { useState } from "react";

const AllUsers = () => {
    
    const [axiosSecure]= UseAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    });

    const handleMakeAdmin=(user)=>{
        fetch(`https://summer-camp-server-taupe-psi.vercel.app/users/admin/${user._id}`, {
           method:'PATCH'         
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }

   const  handleMakeInstructor =(user)=>{
    fetch(`https://summer-camp-server-taupe-psi.vercel.app/users/instructor/${user._id}`, {
        method:'PATCH'         
     })
     .then(res=>res.json())
     .then(data=>{
         console.log(data);
         if(data.modifiedCount){
             refetch();
             Swal.fire({
                 position: 'top-end',
                 icon: 'success',
                 title: `${user.name} is instructor now`,
                 showConfirmButton: false,
                 timer: 1500
               })
         }
     })
   }

    const handleDelete = ()=>{

    }
    return (
        <div className="w-full">
            
            <h3 className="text-3xl font-semibold">Total users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                            <th>Delete user</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i)=> <tr
                            key={user._id}
                            >
                                <th>{i+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{
                                        user.role=='admin'? 'admin': 
                                        <button onClick={()=>handleMakeAdmin(user)} className={` ${user.role=='instructor'? 'opacity-50 pointer-events-none': ''} btn  btn-ghost bg-orange-600 text-white`}> <FaUserShield></FaUserShield></button>                                   
                                    }
                                </td>

                                <td>{
                                        user.role=='instructor'? 'instructor': 
                                        <button onClick={()=>handleMakeInstructor(user)} className={` ${user.role=='admin'? 'opacity-50 pointer-events-none': ''} btn btn-ghost bg-orange-600 text-white`}> <FaUserShield></FaUserShield></button>                                   
                                    }
                                </td>
                                <td>
                                <button onClick={()=>handleDelete(user)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt /></button>
                                </td>
                            </tr>)
                        }
                       
                      
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;