import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

// import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    // const location = useLocation();
    // const navigate = useNavigate();

    const { googleSignin } = useContext(AuthContext);

    // const from = location.state?.from?.pathname || "/";

    const handleGoogleSignin = () => {
        googleSignin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                //     const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                //     fetch('https://bistro-boss-server-nine-xi.vercel.app/users', {
                //         method: 'POST',
                //         headers: {
                //             'content-type': 'application/json'
                //         },
                //         body: JSON.stringify(saveUser)

                //     })
                //         .then(res => res.json())
                //         .then(() => {

                //             navigate(from, { replace: true })
                //         })

            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <div>
            <button onClick={handleGoogleSignin} className="btn btn-success mx-8 mt-4">
                Google Signin
            </button>
        </div>
    );
};

export default SocialLogin;