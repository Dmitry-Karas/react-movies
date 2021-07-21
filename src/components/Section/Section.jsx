import PropTypes from "prop-types";
import { StyledSection, Title } from "./Section.styled";

const Section = ({ title = null, children }) => {
  return (
    <StyledSection>
      {title && <Title />}

      {children}
    </StyledSection>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
