import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import GoogleIcon from "../../assets/icons/google.svg";
import { useAuth } from "../../hooks";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const navigate = useNavigate();
  const {
    user,
    setUser,
    signInWithEmail,
    handleSignInWithGoogle,
    handleResetPassword,
  } = useAuth();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signInWithEmail(email, password);
      setUser(res.user);
      navigate(location?.state || "/");
      Swal.fire("Success", "Login successful", "success");
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

  const onResetPassword = (resetEmail) => {
    setResetEmail("");
    document.getElementById("passwordResetModal").close();
    if (!resetEmail) {
      Swal.fire("Error", "Please enter an email", "error");
      return;
    }
    handleResetPassword(resetEmail)
      .then(() => {
        Swal.fire("Success", "Password reset email sent", "success").then(
          () => {
            window.open("https://mail.google.com", "_blank");
          }
        );
      })
      .catch((err) => Swal.fire("Error", err.message, "error"));
  };

  if (user && user?.accessToken) {
    return <Navigate to={location?.state ? location.state : "/"} />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral">
      <div className="w-96 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-primary text-white text-center py-4">
          <h2 className="text-xl font-bold">Login</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-inherit px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-inherit px-3 py-2 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-primary text-primary"
            required
          />
          <button
            type="button"
            className="btn btn-link"
            onClick={() =>
              document.getElementById("passwordResetModal").showModal()
            }
          >
            Forgot Password?
          </button>
          <button
            type="submit"
            className="w-full bg-secondary text-white py-2 rounded hover:bg-secondary-dark transition duration-300"
          >
            Login
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
              Don&apos;t have an account?
              <button
                type="button"
                className="text-primary ml-1 hover:text-primary-dark"
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            </p>
          </div>
        </form>
        <dialog
          id="passwordResetModal"
          className="modal modal-bottom sm:modal-middle"
        >
          <div className="modal-box">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => {
                document.getElementById("passwordResetModal").close();
                setResetEmail("");
              }}
            >
              ✕
            </button>
            <h3 className="font-bold text-lg">Reset Password</h3>
            <p className="py-4">
              We will send you a link to reset your password
            </p>
            <div className="modal-action">
              <input
                type="email"
                name="resetEmail"
                placeholder="Email"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="w-full input input-bordered"
                required
              />
              <button
                className="btn"
                disabled={!resetEmail}
                onClick={() => onResetPassword(resetEmail)}
              >
                Send
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default LoginForm;
