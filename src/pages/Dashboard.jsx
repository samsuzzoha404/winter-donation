import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="mt-12 px-4 max-w-5xl mx-auto min-h-screen">
      <section className="p-6 bg-neutral-light rounded-md space-y-6">
        <h1 className="text-2xl">Welcome, {user.displayName}!</h1>
        <div className="flex items-center gap-4">
          <img src={user.photoURL} alt="" className="size-24 rounded-full" />
          <div>
            <h2 className="text-xl">{user.displayName}</h2>
            <p className="text-neutral-dark">{user.email}</p>
          </div>
        </div>
        <NavLink
          to="/profile"
          className="btn bg-primary text-neutral-light hover:bg-primary-dark"
        >
          Update Profile
        </NavLink>
      </section>
      <section className="my-12 p-6 bg-neutral-light rounded-md space-y-6">
        <h1 className="text-2xl">Donation History</h1>
        <div className="flex gap-4">
          <img
            src="https://aisd.edu.bd/wp-content/uploads/2019/01/00-min.jpg"
            alt=""
            className="size-40 rounded-md"
          />
          <div className="space-y-3">
            <h2 className="text-xl">Bundle Up Rajshahi</h2>
            <p className="text-neutral-dark">
              Support rural communities in Rajshahi by donating warm clothes
              this winter.
            </p>
            <p>Division: Dhaka</p>
            <p className="bg-secondary-light badge">
              You donated 2 jackets, 3 blankets and 6 gloves.
            </p>
          </div>
        </div>
        <div className="text-end">
          <NavLink
            to="/campaigns"
            className="btn bg-primary text-neutral-light hover:bg-primary-dark"
          >
            Donate Now
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
