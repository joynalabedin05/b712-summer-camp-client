import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            Swal.fire({
                title: 'user login succefully',
                showClass: {
                  popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
                }              
              })
              navigate(from, { replace: true });
            
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="">
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 pb-10 mx-auto my-10">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true })} name="password" placeholder="password" className="input input-bordered" />
                        {errors.password && <span>This field is required</span>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Login" />
                    </div>
                </form>
                <p className='ml-9 font-bold'><small>Do not have any account?   <Link to='/signup'>Signup</Link> </small></p>
                <div className="divider mx-8">OR</div>
                {/* <button className="btn btn-success mx-8 mt-4 ">GOOGLE SIGNIN</button> */}
                <SocialLogin></SocialLogin>

            </div>
        </div>
    );
};

export default Login;