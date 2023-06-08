import { useEffect, useState } from "react";
import PopularClasses from "./PopularClasses";


const PopularClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/classes')
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[])
    return (
       <div className="my-10">
        <h4 className="my-5 text-4xl">Popular Classes</h4>
         <div className="grid md:grid-cols-2 gap-8">
            {
                classes.map(item=><PopularClasses item={item}
                key={item._id}
                ></PopularClasses>)
            } 
        </div>
       </div>
    );
};

export default PopularClass;