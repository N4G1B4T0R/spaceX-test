import { FC, memo } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { StatusList } from '../../constants.ts';

interface IProps {
  value: string;
  onChange: (event: SelectChangeEvent) => void;
}

export const AppSelect: FC<IProps> = memo((props) => {
  const { value, onChange } = props;
  return (
    <FormControl
      sx={{
        width: {
          xs: '100%',
          md: 320
        }
      }}>
      <InputLabel id="select-label">Launch success</InputLabel>
      <Select labelId="select-label" role="select" value={value} onChange={onChange}>
        {StatusList.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});
