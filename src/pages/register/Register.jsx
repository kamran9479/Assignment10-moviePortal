import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../authProvider/AuthProvider';

const Register = () => {
    const { handleRegister, manageProfile } = useContext(authContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        if (!/[A-Z]/.test(password)) {
            return setError("Password must have at least one uppercase letter.");
        }
        if (!/[a-z]/.test(password)) {
            return setError("Password must have at least one lowercase letter.");
        }
        if (password.length < 6) {
            return setError("Password must be at least 6 characters long.");
        }

        handleRegister(email, password).then(() => {
            manageProfile({ displayName: name, photoURL: photo }).then(() => {
                navigate("/");
            });
        });
    };

    return (
        <div className="flex justify-center items-center p-4">
            <div className="w-full max-w-md p-6 rounded-lg shadow-md">
                <h1 className='text-center text-3xl font-bold mb-4'>Register</h1>
                <p className='text-center text-gray-600 mb-6'>Create an account to get started</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="form-control">
                        <label className="label font-medium">Name</label>
                        <input name='name' type="text" placeholder="Enter your name" className="input input-bordered w-full p-2 rounded border-gray-300" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-medium">Email</label>
                        <input name='email' type="email" placeholder="Enter your email" className="input input-bordered w-full p-2 rounded border-gray-300" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-medium">Photo URL</label>
                        <input name='photo' type="text" placeholder="Enter your photo URL" className="input input-bordered w-full p-2 rounded border-gray-300" required />
                    </div>
                    <div className="form-control">
                        <label className="label font-medium">Password</label>
                        <input name='password' type="password" placeholder="Enter your password" className="input input-bordered w-full p-2 rounded border-gray-300" required />
                    </div>
                    {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}
                    <button className="w-full btn btn-primary py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition">Register</button>
                </form>
                <p className='text-center text-sm mt-4'>Already have an account? <Link className='text-blue-600 underline' to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;
