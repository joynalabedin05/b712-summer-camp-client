
import { useQuery } from "react-query";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const AllPayments = () => {
    const {user}  = useContext(AuthContext);
    const [axiosSecure]= UseAxiosSecure();
    // const [disabled, setDisabled] = useState(false);
    const { data: users = [], } = useQuery(['payments', user?.email], async () => {
        const res = await axiosSecure.get(`/payments/${user.email}`)
        console.log(res.data);
        return res.data;
    });

    return (
        <div className="w-full">    
        <h3 className="text-3xl font-semibold">Total payments: {users.length}</h3>
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>TransactionId</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Quantity</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, i)=> <tr
                        key={user._id}
                        >
                            <th>{i+1}</th>
                            <td>{user.transactionId}</td>                         
                            <td>{user.email}</td>
                            <td>{user.date}</td>
                            <td>{user.price}</td>
                            <td>{user.quantity}</td>
                        </tr>)
                    }
                   
                  
                </tbody>
            </table>
        </div>

        </div>
    );
};

export default AllPayments;