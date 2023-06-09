
import UseAxiosSecure from"./UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { useQuery } from "react-query";

const useInstructor = ()=>{
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = UseAxiosSecure();
    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async()=>{
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            // console.log('is admin result', res);
            return res.data.instructor;
        }
    });
    return [isInstructor, isInstructorLoading];
}
export default useInstructor;