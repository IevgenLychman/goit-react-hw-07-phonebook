import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from '../../redux/contactsSlice';
import { Label, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();

  const filterValue = useSelector(getFilter);

  const saveFilterValue = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div>
      <Label> Find contacts by Name</Label>
      <Input
        type="text"
        name="filter"
        value={filterValue}
        onChange={saveFilterValue}
      />
    </div>
  );
};
