import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 pb-10">
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
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} name="password" placeholder="password" className="input input-bordered" />
                        {errors.password?.type === 'required' && <p>password is required</p>}
                        {errors.password?.type === 'minLength' && <p>password must be 6 character is required</p>}
                        {errors.password?.type === 'maxLength' && <p>password must be less than 20 character is required</p>}
                        {errors.password?.type === 'pattern' && <p>password must be one uppercase, one lowercase, one number, one special character</p>}
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className="btn btn-primary" value="Signup" />
                    </div>
                </form>
                <p className='ml-9 font-bold'><small>Already have an account?   <Link to='/login'>LOGIN</Link> </small></p>

            </div>

        </div>
    );
};

export default Signup;