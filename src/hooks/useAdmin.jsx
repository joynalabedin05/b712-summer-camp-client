
import UseAxiosSecure from "./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "react-query";


const useAdmin = ()=>{
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = UseAxiosSecure();
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            // console.log('is admin result', res);
            return res.data.admin;
        }
    });
    return [isAdmin, isAdminLoading];
}
export default useAdmin;