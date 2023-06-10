import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const Scolarship = () => {


    return (
        <motion.div className="my-8" 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 10 }}>
            
            <h3 className="text-4xl mb-7 mx-auto">Scolarship</h3>
            <div className="md:flex gap-10">
                <div>
                    <img className="rounded-lg hover:scale-105 transition duration-300 ease-in-out " src="https://images.adsttc.com/media/images/6412/0d56/747d/5901/7042/0dce/newsletter/lumit-art-high-school-lukkairoinen-architects_4.jpg?1678904713" alt="" />
                    <button className="bg-slate-200 p-3 font-semi-bold hover:text-red-500 rounded text-lg my-5"><Link  to='/'>Achievement School</Link></button>
                    <p>Academy of Art University is pleased to announce the 2023 Achievement Scholarship, which offers a limited Scholarship, which offers a limited number of awards worth up to $5,000 based on Expected Family Contribution.</p>
                </div>
                <div className="">
                    <img className="rounded-lg  hover:scale-105 transition duration-300 ease-in-out" src="https://img.freepik.com/free-vector/flat-design-after-school-activities-webinar_23-2149645246.jpg" alt="" />
                    <button className="bg-slate-100 p-3 font-semi-bold hover:text-red-500 rounded text-lg my-5 "><Link  to='/'>Prerecorded program</Link></button>
                    <p>Academy of Art Universitys free Pre-College Art & Design Experience (PCADE) is for every high school student who wants to take a deep dive into their own creative universe. Study animation, game design, fashion, fine art, photography, filmmaking, and much more.</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Scolarship;