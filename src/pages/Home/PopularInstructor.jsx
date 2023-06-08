import { useEffect, useState } from "react";
import Instructors from "./Instructors";


const PopularInstructor = () => {
    const [instructor, setInstructor] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/instructor')
        .then(res=>res.json())
        .then(data=>setInstructor(data))
    },[])
    return (
       <div className="my-10">
        <h4 className="my-5 text-4xl">Popular Instructor</h4>
         <div className="grid md:grid-cols-3 ">
          {
            instructor.map(item=><Instructors item={item} key={item._id}></Instructors>)
          }
       </div>
       </div>
    );
};

export default PopularInstructor;