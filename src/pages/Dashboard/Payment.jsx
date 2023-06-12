import { loadStripe } from "@stripe/stripe-js";
import useCart from "../../hooks/useCart";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway);
const Payment = () => {
    const [cart] = useCart();
    // console.log(cart);
    const total = cart.reduce((sum, item)=> sum+item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div>
             <h4 className="class text-3xl p-5">Payment here </h4>
           <Elements stripe={stripePromise}>
               <CheckoutForm cart={cart} price={price}></CheckoutForm>
            </Elements> 
        </div>
    );
};

export default Payment;