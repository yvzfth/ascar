import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { ICar } from '../types';

interface IMultipleSelect {
  label: string;
  items: string[];
  formData: ICar;
  setFormData: React.Dispatch<React.SetStateAction<ICar>>;
}

function getStyles(item: string, selected: readonly string[], theme: Theme) {
  return {
    fontWeight:
      selected.indexOf(item) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({
  label,
  items,
  formData,
  setFormData,
}: IMultipleSelect) {
  const theme = useTheme();
  // const [selected, setSelected] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<string[]>) => {
    const { name, value } = event.target;
    setFormData(
      // On autofill we get a stringified value.
      {
        ...formData,
        [name]: value,
      }
    );
  };

  return (
    <div>
      <FormControl className='m-1 w-[16rem]'>
        <InputLabel id='demo-multiple-chip-label'>{label}</InputLabel>
        <Select
          labelId='demo-multiple-chip-label'
          id='demo-multiple-chip'
          multiple
          value={
            label == 'Teknolojiler' ? formData.technologies : formData.features
          }
          name={label == 'Teknolojiler' ? 'technologies' : 'features'}
          onChange={handleChange}
          input={<OutlinedInput id='select-multiple-chip' label={label} />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {items.map((item) => (
            <MenuItem
              key={item}
              value={item}
              style={getStyles(
                item,
                label === 'Technologies'
                  ? formData.technologies
                  : formData.features,
                theme
              )}
            >
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
