import { HandHeart, Search, ShoppingCart, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <section className="py-12 bg-neutral-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Step 1 */}
          <div className="flex flex-col items-center" data-aos="zoom-out">
            <div className="w-16 h-16 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4">
              <UserPlus />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Sign Up or Log In
            </h3>
            <p className="text-gray-500">
              Create an account or log in to access donation campaigns and
              manage your contributions.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center" data-aos="zoom-out">
            <div className="w-16 h-16 flex items-center justify-center bg-green-600 text-white rounded-full mb-4">
              <Search />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Choose a Campaign
            </h3>
            <p className="text-gray-500">
              Explore donation campaigns, learn about their goals, and select
              one to contribute to.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center" data-aos="zoom-out">
            <div className="w-16 h-16 flex items-center justify-center bg-yellow-600 text-white rounded-full mb-4">
              <HandHeart />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Make a Donation
            </h3>
            <p className="text-gray-500">
              Fill out the form with the type and quantity of items to donate
              and your pickup location.
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center" data-aos="zoom-out">
            <div className="w-16 h-16 flex items-center justify-center bg-red-600 text-white rounded-full mb-4">
              <ShoppingCart />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Items Collected
            </h3>
            <p className="text-gray-500">
              Our team collects your items and delivers them to the campaign's
              beneficiaries.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/login"
            className="w-fit bg-secondary hover:bg-secondary-dark text-white px-8 py-3 rounded-lg flex items-center gap-2 mx-auto transition-all transform hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
