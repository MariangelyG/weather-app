import { Box, Button, TextField } from "@mui/material";
//input y botón de buscar ciudad
export const SearchButton = ({ onSubmit, handleChange, city }) => {
  return (
    <Box component="form" onSubmit={onSubmit}>
      <TextField
        variant="filled"
        color="primary"
        label="Search City"
        placeholder="write your city"
        value={city}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        sx={{ ml: 2, mt: 1, borderRadius: 3 }}
      >
        Search
      </Button>
    </Box>
  );
};
