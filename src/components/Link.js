import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);
  console.log(navigate);

  const handleClick = (e) => {
    e.preventDefault();

    navigate(to);
  };

  return <a onClick={handleClick}>{children}</a>;
}

export default Link;
