import PopularClass from "./PopularClass";
import PopularInstructor from "./PopularInstructor";
import Scolarship from "./Scolarship";
import Slider from "./Slider";



const Home = () => {
    return (
        <div>
            <Slider></Slider> 
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <Scolarship></Scolarship>    
        </div>
    );
};

export default Home;