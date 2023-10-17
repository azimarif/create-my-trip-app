import React from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
} from "@mui/material";

interface DropdownProps {
    items: string[];
    defaultValue: string;
    onChangeHandler: any
}

const Dropdown: React.FC<DropdownProps> = ({ items, defaultValue, onChangeHandler }) => {
    return (
        <FormControl sx={{ m: 0, width: 300 }}>
            <InputLabel>{defaultValue}</InputLabel>
            <Select
                onChange={onChangeHandler}
                input={<OutlinedInput label={defaultValue} />}
            >
                {items.map((item: string) => (
                    <MenuItem key={item} value={item}>
                        {item}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default Dropdown;
