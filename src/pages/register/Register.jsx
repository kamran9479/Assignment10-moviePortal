
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../authProvider/AuthProvider';


const Register = () => {
    const { handleRegister,manageProfile } = useContext(authContext)

    const navigate = useNavigate();
    const handleSubmit = (e) => {

        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const data = { email, password }
        console.log(data)
        handleRegister(email, password)
        .then(result =>{
            manageProfile({displayName : name, photoURL : photo})
            .then(()=>{
                navigate("/")
            })
            

        })
            



        // if (!/[A-Z]/.test(password)) {
        //     return setError("Must have at least one uppercase letter.");
        // }
        // if (!/[a-z]/.test(password)) {
        //     return setError("Must have at least one lowercase letter.");
        // }
        // if (password.length < 6) {
        //     return setError("Password must be at least 6 characters long.");
        // }

    };
    return (
        <div className='p-5 mb-8'>

            <div className="w-11/12 rounded-xl md:w-6/12 mx-auto  p-10">
                <form onSubmit={handleSubmit}>
                    <h1 className='text-center text-4xl font-bold'>Register Your Account</h1>
                    <p className='text-center'>Enter your email below to login to your account</p>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo-Url</span>
                        </label>
                        <input name='photo' type="text" placeholder="URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                    </div>
                    {/* {
                        error && <p className='text-red-500'>{error}</p>
                    } */}
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p className='text-center p-2'>Already have an account? <Link className='underline' to='/login'>Login</Link></p>

                </form>



            </div>

        </div>
    );
};

export default Register;