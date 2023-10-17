import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';

interface DropdownProps {
  items: string[];
  placeHolder: string;
  onChangeHandler: any;
}

const Dropdown: React.FC<DropdownProps> = ({
  items,
  placeHolder,
  onChangeHandler,
}) => {
  return (
    <FormControl sx={{ m: 0, width: 300 }}>
      <InputLabel>{placeHolder}</InputLabel>
      <Select
        onChange={onChangeHandler}
        input={<OutlinedInput label={placeHolder} />}
      >
        {items.map((item: string) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
