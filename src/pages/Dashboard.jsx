import useAuth from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/auth/authActions";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { user } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function logout() {
    dispatch(logoutUser()).then(() => {
      toast.success("Logout successful!");
      navigate("/auth-login");
    });
  }

  return (
    <div className="text-zinc-50">
      {user?.username} Dashboard <button onClick={logout}> Logout</button>
    </div>
  );
}
