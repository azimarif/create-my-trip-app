import React from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';

interface MultiSelectProps {
  items: string[];
  placeHolder: string;
  selectedItems: string[];
  onChangeHandler: any;
}

const MultiSelect: React.FC<MultiSelectProps> = ({
  items,
  placeHolder,
  selectedItems,
  onChangeHandler,
}) => {
  return (
    <FormControl sx={{ m: 0, width: 300 }}>
      <InputLabel>{placeHolder}</InputLabel>
      <Select
        multiple
        value={selectedItems}
        onChange={onChangeHandler}
        input={<OutlinedInput label={placeHolder} />}
      >
        {items.map((value) => (
          <MenuItem key={value} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default MultiSelect;
