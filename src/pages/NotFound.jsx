import { AlertOctagon } from "lucide-react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <div className="flex justify-center mb-6">
          <AlertOctagon size={80} className="text-red-500" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-6">
          {`Oops! The page you're looking for doesn't exist or has been moved.`}
        </p>
        <Link
          to="/"
          className="inline-block bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition duration-300"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
