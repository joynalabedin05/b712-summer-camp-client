import { useEffect, useState } from "react";
import Instructors from "../Home/Instructors";


const InstructorPage = () => {
    
    const [instructor, setInstructor] = useState([]);
    useEffect(()=>{
        fetch('https://summer-camp-server-taupe-psi.vercel.app/allinstructor')
        .then(res=>res.json())
        .then(data=>setInstructor(data))
    },[]);
    return (
        <div className="my-10">
        <h4 className="my-5 text-4xl">Popular Instructor</h4>
         <div className="grid md:grid-cols-3 gap-5">
          {
            instructor.map(item=><Instructors item={item} key={item._id}></Instructors>)
          }
       </div>
       </div>
    );
};

export default InstructorPage;