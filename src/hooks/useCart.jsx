import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "react-query";

const useCart = ()=>{
    const {user, loading} = useContext(AuthContext);
    
    const [axiosSecure]= UseAxiosSecure();
    const { refetch, data: cart=[] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        
        queryFn: async()=>{
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            // console.log('res from axiox' ,res);
            return res.data;
        },
      });
      return [cart,refetch];
}
export default useCart;