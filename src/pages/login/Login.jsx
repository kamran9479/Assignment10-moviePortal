import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../authProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { handleLogin, logInWithGoogle, errorMsg } = useContext(authContext);
    const [showPass, setShowPass] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        handleLogin(email, password).then(() => {
            navigate(location?.state ? location.state : "/");
        });
    };

    const handleGoogle = () => {
        logInWithGoogle().then(() => {
            navigate(location?.state ? location.state : "/");
        });
    };

    return (
        <div className="flex justify-center items-center p-4">
            <div className="w-full max-w-md p-6 rounded-lg shadow-md">
                <h1 className='text-center text-3xl font-bold mb-6'>Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label className="label font-medium">Email</label>
                        <input name='email' type="email" placeholder="Enter your email" className="input input-bordered w-full p-2 rounded border-gray-300" required />
                    </div>
                    <div className="form-control relative">
                        <label className="label font-medium">Password</label>
                        <input 
                            name='password' 
                            type={showPass ? 'text' : 'password'} 
                            placeholder="Enter your password" 
                            className="input input-bordered w-full p-2 rounded border-gray-300" 
                            required 
                        />
                        <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-12 text-gray-500">
                            {showPass ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
                        </button>
                        <div className="flex items-center gap-2 mt-2">
                            <input type="checkbox" name="terms" className="size-5" required />
                            <p className="text-sm">Accept our <Link to="/terms" className="text-blue-600 underline">terms and conditions</Link></p>
                        </div>
                        {errorMsg && <p className="text-red-500 text-sm mt-2">{errorMsg}</p>}
                    </div>
                    <div className="text-right">
                        <Link to='/forgotpass' className="text-blue-600 text-sm underline">Forgot password?</Link>
                    </div>
                    <button className="w-full btn btn-primary py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition">Login</button>
                </form>
                <p className='text-center text-sm mt-4'>Don’t have an account? <Link className='text-blue-600 underline' to='/register'>Register</Link></p>
                <div className="divider my-4">OR</div>
                <div className="flex flex-col gap-3">
                    <button onClick={handleGoogle} className='btn w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition'>Continue with Google</button>
                    <button className='btn w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition'>Continue with GitHub</button>
                </div>
            </div>
        </div>
    );
};

export default Login;
