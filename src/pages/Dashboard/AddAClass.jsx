import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const img_hosting_token = import.meta.env.VITE_IMAGE;
const AddAClass = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    console.log(user.displayName);
    const [axiosSecure] = UseAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                // console.log(imgResponse);
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    // console.log(data,imgURL);
                    const { name, price,seats,instructor, status ,email } = data;
                    const newItem = { name,instructor,status, price: parseFloat(price),seats: parseFloat(seats), image: imgURL, email };
                    console.log(newItem);
                    axiosSecure.post('/classes', newItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    };
    console.log(errors);
    return (
        <div className="w-full px-10">
            <h3 className="text-4xl mx-auto mb-3">Add A Class</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Class name*</span>
                        </label>
                        <input type="text" placeholder="class name" {...register("name", { required: true, maxLength: 80 })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-5">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Name*</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} {...register("instructor", { required: true, maxLength: 80 })} className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Instructor Email*</span>
                        </label>
                        <input type="email" defaultValue={user?.email}  {...register("email", { required: true })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-5">
                        <label className="label">
                            <span className="label-text font-semibold">Available Seats*</span>
                        </label>
                        <input type="number" placeholder="Type here"  {...register("seats", { required: true })} className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" placeholder="Type here"  {...register("price", { required: true })} className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-5">
                        <label className="label">
                            <span className="label-text font-semibold">Status*</span>
                        </label>
                        <input type="text" placeholder="Type here"  {...register("status", { required: true })} className="input input-bordered w-full " />
                    </div>
                </div>
                
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image</span>
                    </label>
                    <input type="file"  {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm" type="submit" value="Add Class" />
            </form>
        </div>
    );
};

export default AddAClass;