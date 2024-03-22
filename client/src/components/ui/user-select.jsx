import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function UserSelect({ label, users, selected }) {
  const [userId, setUserId] = React.useState("");

  const handleChange = (event) => {
    setUserId(event.target.value);
    selected(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 300 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">{label}</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={userId}
          label={label}
          onChange={handleChange}
        >
          {users &&
            users.length > 0 &&
            users.map((user) => (
              <MenuItem key={user.id} value={user}>
                {user.firstName + " " + user.lastName}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
}
