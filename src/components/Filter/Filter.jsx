import { StyledInput, StyledTitle } from 'components/Filter/Filter.styled';
import PropTypes from 'prop-types';
export const Filter = ({ onChangeFilter }) => {
  return (
    <>
      <StyledTitle>Find contacts by name</StyledTitle>
      <StyledInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={onChangeFilter}
      />
    </>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
};
