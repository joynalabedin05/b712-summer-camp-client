import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../Login/SocialLogin";

const Signup = () => {
    // const navigate = useNavigate();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        // console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // const updatedUser  = result.user;
                        // PROFILE UPDATED
                    //    const saveUser = {name: data.name, email: data.email}

                    //     fetch('https://bistro-boss-server-nine-xi.vercel.app/users',{
                    //         method:'POST',
                    //         headers:{
                    //             'content-type': 'application/json'
                    //         },
                    //         body: JSON.stringify(saveUser)

                    //     })
                    //         .then(res => res.json())
                    //         .then(data => {
                    //             if (data.insertedId) {
                    //                 // reset();
                    //                 Swal.fire({
                    //                     position: 'top-end',
                    //                     icon: 'success',
                    //                     title: 'user profile updated',
                    //                     showConfirmButton: false,
                    //                     timer: 1500
                    //                 });
                    //                 navigate('/');
                    //             }
                    //         })

                    // })
                    // .catch(error => {
                    //     console.log(error);


                    })
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        
            <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 my-10 mx-auto pb-8">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                        {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <input type="text" {...register("photoURL", { required: true })} placeholder="photo url" className="input input-bordered" />
                        {errors.photoURL && <span>pHOTO URL is required</span>}
                    </div>
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
                        <input type="password" {...register("password", {
                            required: true,
                            minLength: 6,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                        })} name="password" placeholder="password" className="input input-bordered" />
                        {errors.password?.type === 'required' && <p>password is required</p>}
                        {errors.password?.type === 'minLength' && <p>password must be 6 character is required</p>}
                        {errors.password?.type === 'pattern' && <p>password must be one uppercase, six characters & one special character</p>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type="password" {...register("confirmPassword", {
                            required: true,
                            minLength: 6,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/
                        })} name="confirmPassword" placeholder="confirmPassword" className="input input-bordered" />
                        {errors.confirmPassword?.type === 'required' && <p>password is required</p>}
                        {errors.confirmPassword?.type === 'minLength' && <p>password must be 6 character is required</p>}
                        {errors.confirmPassword?.type === 'pattern' && <p>password must be one uppercase, six characters & one special character</p>}
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Signup" />
                    </div>
                </form>
                <p className='ml-9 font-bold'><small>Already have an account?   <Link to='/login'>LOGIN</Link> </small></p>
                <div className="divider mx-8">OR</div>
                <SocialLogin></SocialLogin>

            </div>
    );
};

export default Signup;