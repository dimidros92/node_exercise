import * as React from "react";
import "./user-form.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import UserSelect from "../user-select";

export default function UsersForm({ users, selected }) {
  const [userA, setUserA] = React.useState(undefined);
  const [userB, setUserB] = React.useState(undefined);
  React.useEffect(() => {
    if (userA && userB) {
      selected([userA, userB]);
    }
  }, [userA, userB, selected]);
  return (
    <Card className="card">
      <CardContent className="card-content">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Choose two users to see their conversation
        </Typography>
        <div className="selects">
          <UserSelect
            label="User A"
            selected={setUserA}
            users={users.filter((user) => user.id !== userB?.id ?? -1)}
          ></UserSelect>
          <UserSelect
            label="User B"
            selected={setUserB}
            users={users.filter((user) => user.id !== userA?.id ?? -1)}
          ></UserSelect>
        </div>
      </CardContent>
    </Card>
  );
}
