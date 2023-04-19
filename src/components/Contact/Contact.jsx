import PropTypes from 'prop-types';
import { StyledWrapper, StyledButton } from './Contact.styled';

export const Contact = ({ name, number, onDeleteContact, id }) => {
  return (
    <StyledWrapper>
      <li>
        {name}: {number}
      </li>
      <StyledButton onClick={() => onDeleteContact(id)}>Delete</StyledButton>
    </StyledWrapper>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
