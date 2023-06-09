import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";


const PopularClasses = ({ item }) => {
    const {user}= useContext(AuthContext);
    const [,refetch] = useCart();
    const location = useLocation();
    const navigate = useNavigate();

    const { image,_id, name, instructor, seats, price } = item;
    // console.log(item);
    const handleAddToCart = (item)=>{
        console.log(item);
        if(user && user.email){
            const cartItem = {menuItemId:_id,displayName: user?.displayName, name, image, price,instructor, email: user.email};
            console.log(cartItem);
                fetch('http://localhost:5000/carts',{
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(cartItem)
                })
                .then(res=>res.json())
                .then(data=>{
                    // refetch the cart to update the number of products
                    refetch(); 
                    if(data.insertedId){
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'class adddedo to the cart',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }
            else{
                Swal.fire({
                    title: 'Please login to order the food?',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Login Now!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                     navigate('/login', {state :{from: location}})
                    }
                  })
            }

    }
    return (
        <div className="card card-side bg-base-100 shadow-xl p-5">
            <figure><img className="md:w-[350px] md:h-[300px] p-5" src={image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{instructor}</h2>
                <p>Class Name: {name}</p>
                <p>Available Seats: {seats}</p>
                <p>Price: {price}</p>
                <button onClick={()=>handleAddToCart(item)} className="btn btn-success w-9/12">Enroll Now</button>
            </div>
        </div>
    );
};

export default PopularClasses;