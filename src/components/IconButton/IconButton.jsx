import PropTypes from "prop-types";
import { Button } from "./IconButton.styled";

const IconButton = ({ children, onClick }) => {
  return <Button>{children}</Button>;
};

export default IconButton;

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onclick: PropTypes.func.isRequired,
};
