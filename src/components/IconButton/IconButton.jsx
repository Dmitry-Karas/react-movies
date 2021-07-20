import PropTypes from "prop-types";
import { Button } from "./IconButton.styled";

const IconButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default IconButton;
