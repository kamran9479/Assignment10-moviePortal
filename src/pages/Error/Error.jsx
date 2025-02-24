import { Link } from "react-router-dom";

export default function ErrorPage() {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mt-4">Oops! Page not found</h2>
        <p className="text-gray-600 mt-2">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <Link to="/" className="mt-6 px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Go Home</Link>
      </div>
    );
  }
  