import { useContext, useState } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";
import { authContext } from "../../authProvider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const { handleLogin, logInWithGoogle, errorMsg,setUser } = useContext(authContext)
    const [showPass, setShowPass] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        handleLogin(email, password)
        .then(result =>{
            navigate(location?.state ? location.state : "/")
        })
      
    }

    const handleGoogle = ()=>{

        logInWithGoogle()
        .then(result =>{
            
            navigate(location?.state ? location.state : "/")
        })

    }


    return (
        <div className=" w-11/12 md:w-6/12 grid grid-cols-2 p-6 mx-auto bg-slate-800 text-slate-300 my-8 rounded-2xl ">
            <h1 className='text-center text-4xl font-bold col-span-2'>Login Form</h1>
            <form onSubmit={handleSubmit}>


                <div className="form-control">
                    <label className="label">
                        <span className="">Email</span>
                    </label>
                    <input name='email' type="email" placeholder="email" className="input input-bordered text-slate-950 bg-slate-200" required />
                </div>
                <div className="form-control relative">
                    <label className="label">
                        <span className="">Password</span>
                    </label>
                    <input name='password' type={showPass ? 'text' : 'password'} placeholder="password" className="input text-slate-950 bg-slate-200 input-bordered" required />
                    {
                        showPass ? <FaEyeSlash onClick={() => setShowPass(!showPass)} className="absolute right-2 top-14 text-black size-5"></FaEyeSlash> : <FaEye onClick={() => setShowPass(!showPass)} className="absolute right-2 top-14 text-black size-5"></FaEye>
                    }
                    <div className="flex gap-1 p-2 items-center">
                        <input type="checkbox" name="terms" className="checkbox-primary size-5 " required />
                        <p>Accept our tearms and conditions</p>
                    </div>
                    {
                        errorMsg && <p className="text-red-400 ">{errorMsg}</p>
                    }
                    <label>
                        <Link to='/forgotpass' className="label underline">Forgot password?</Link>
                    </label>
                </div>
                {/* {
                    error && <p className='text-red-500'>{error}</p>
                } */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <p className='text-center p-2'>Dont have an account? <Link className='underline' to='/register'>Register</Link></p>
            </form>
            {/* <div className="flex w-full flex-col border-opacity-50">
                <div className="divider">OR Continue with</div>
            </div> */}
            <div className="p-5 flex flex-col justify-center gap-8 text-orange-200">
                <h1 className="font-semibold text-2xl text-center">Login with </h1>
                <div className="grid grid-cols-2 gap-3">
                    <button onClick={handleGoogle} className='btn bg-indigo-800 border-indigo-900 text-slate-200 hover:text-black text-lg font-semibold'><Link> Google</Link></button>
                    <button className='btn bg-indigo-800 border-indigo-900 text-slate-200 hover:text-black text-lg font-semibold'><Link> GitHub</Link></button>
                </div>

            </div>

        </div>
    );
};

export default Login;