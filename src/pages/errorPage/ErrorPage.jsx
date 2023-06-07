import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <img className="mx-auto h-[500px]" src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg" alt="" />
            <button className="btn btn-primary "><Link to='/'>Back To Home</Link></button>
        </div>
    );
};

export default ErrorPage;