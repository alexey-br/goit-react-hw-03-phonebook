import PropTypes from 'prop-types';
import { FilterLabel, FilterInput } from './Filter.styled';

export default function Filter({ text, onInput }) {
  return (
    <label>
      <FilterLabel>Find contacts by name:</FilterLabel>

      <FilterInput type="text" value={text} onChange={onInput} />
    </label>
  );
}

Filter.propTypes = {
  text: PropTypes.string,
  onInput: PropTypes.func.isRequired,
};
