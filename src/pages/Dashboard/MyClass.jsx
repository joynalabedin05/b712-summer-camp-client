
import { FaTrashAlt } from 'react-icons/fa';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useCart from '../../hooks/useCart';

const MyClass = () => {
    const [cart, refetch] = useCart();
    const total = cart.reduce((sum, item) => item.price + sum, 0);

    const handleDelete = (item)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
             fetch(`https://summer-camp-server-taupe-psi.vercel.app/carts/${item._id}`,{
                method:'DELETE', 
             })
             .then(res=>res.json())
             .then(data=>{
                if(data.deletedCount>0){
                    refetch();
                    Swal.fire(
                        'Deleted!',
                        'Your class has been deleted.',
                        'success'
                      )
                }
             })
            }
          })
    }

    return (
        <div className="w-full mx-auto mt-10">
       
        <div className="font-semi-bold flex justify-evenly ">
            <h3 className="text-3xl uppercase">Total Classes: {cart.length}</h3>
            <h3 className="text-3xl uppercase">Total Price: {total}</h3>
            <Link to='/dashboard/payment'><button className="btn btn-warning btn-sm">PAY</button></Link>
            
        </div>
        <div className="overflow-x-auto mt-5 ">
            <table className="table w-full ">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        <th>Class IMG</th>
                        <th>Class Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map((item, i) => <tr
                            key={item._id}>
                            <td>
                                {i + 1}
                            </td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} />
                                    </div>
                                </div>
                            </td>
                            <td>
                               {item.name}
                            </td>
                            <td>${item.price}</td>
                            <td>
                                <button onClick={()=>handleDelete(item)} className="btn btn-ghost bg-red-600 text-white"><FaTrashAlt /></button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>

    </div>
    );
};

export default MyClass;