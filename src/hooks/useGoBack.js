import { useRef } from "react";
import { useLocation, useHistory } from "react-router-dom";

const useGoBack = () => {
  const history = useHistory();
  const location = useLocation();
  const routerState = useRef(location.state?.from).current;

  const goBack = () => {
    history.push(routerState || "/");
  };

  return goBack;
};

export default useGoBack;
