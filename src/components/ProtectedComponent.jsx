import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
/*import { useEffect } from "react";

const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();

  const [user, isLoading] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  }, [user, navigate]);

  if (isLoading) {
    return;
  } else {
    return children;
  }
};*/

const ProtectedComponent = ({ children }) => {
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  return loading ? null : user ? children : navigate("/login");
};

export default ProtectedComponent;
