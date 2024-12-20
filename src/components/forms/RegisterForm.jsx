import { Eye, EyeOff, EyeOffIcon } from "lucide-react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import GoogleIcon from "../../assets/icons/google.svg";
import { useAuth } from "../../hooks";
import { validatePassword } from "../../utils/validatePassword";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    user,
    setUser,
    createUser,
    handleUpdateProfile,
    handleSignInWithGoogle,
    handleLogOut,
  } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordErrors = validatePassword(password, confirmPassword);
    if (passwordErrors.length > 0) {
      Swal.fire("Error", passwordErrors.join(", "), "error");
      return;
    }
    try {
      const res = await createUser(email, password);
      Swal.fire(
        "Success",
        "Registration successful. You can login now",
        "success"
      );
      setUser(res.user);
      await handleUpdateProfile({ displayName: name, photoURL });
      await handleLogOut();
      navigate("/login");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await handleSignInWithGoogle();
      navigate(location?.state || "/");
      Swal.fire("Success", "Login successful", "success");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }
  };

  if (user && user?.accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral">
      <div className="w-96 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-primary text-white text-center py-4">
          <h2 className="text-xl font-bold">Register</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-inherit px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            required
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            className="w-full bg-inherit px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-inherit px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-inherit px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary text-primary"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-primary focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <Eye />}
            </button>
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full bg-inherit px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary text-primary"
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-primary focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary text-white py-2 rounded hover:bg-secondary-dark transition duration-300"
          >
            Register
          </button>

          <div className="flex items-center my-3">
            <div className="border-t border-gray-300 flex-grow"></div>
            <span className="px-3 text-gray-500">or</span>
            <div className="border-t border-gray-300 flex-grow"></div>
          </div>

          <button
            type="button"
            className="w-full border border-primary text-primary py-2 rounded flex items-center justify-center hover:bg-primary/10 transition duration-300 gap-2"
            onClick={handleGoogleLogin}
          >
            <img src={GoogleIcon} alt="google icon" />
            Continue with Google
          </button>

          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?
              <button
                type="button"
                className="text-[#1B4965] ml-1 hover:text-[#62B6CB]"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
