import { useEffect, useState } from "react";
import PopularClasses from "./PopularClasses";


const PopularClass = () => {
    const [classes, setClasses] = useState([]);

    useEffect(()=>{
        fetch('https://summer-camp-server-taupe-psi.vercel.app/popularclass')
        .then(res=>res.json())
        .then(data=>setClasses(data))
    },[])
    return (
       <div className="my-10">
        <h4 className="my-5 text-4xl">Popular Classes</h4>
         <div className="grid md:grid-cols-2 gap-8">
            {
                classes.slice(0,6).map(item=><PopularClasses item={item}
                key={item._id}
                ></PopularClasses>)
            } 
        </div>
       </div>
    );
};

export default PopularClass;