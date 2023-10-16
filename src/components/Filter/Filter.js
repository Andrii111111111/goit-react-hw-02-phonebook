import { FilterWraper } from './Filter.styles';

export const Filter = ({ filters, onChengeFilter }) => {
  return (
    <FilterWraper>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filters}
        onChange={evt => {
          onChengeFilter(evt.target.value);
        }}
        name="filter"
        required
      />
    </FilterWraper>
  );
};