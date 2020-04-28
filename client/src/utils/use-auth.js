import { useHistory } from "react-router-dom";

const useAuth = () => {
  const history = useHistory();
  const getToken = () => localStorage.getItem("token");
  const isLoggedIn = () => !!getToken();
  const logOut = () => {
    localStorage.removeItem("token");
  };
  const loginRequired = () => {
    if (!isLoggedIn()) history.push("/login");
  };
  return { getToken, isLoggedIn, logOut, loginRequired };
};

export default useAuth;
