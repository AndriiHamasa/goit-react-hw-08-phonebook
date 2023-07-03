import { Button } from "@mui/material";

export const UserMenu = ({email, logout}) => {
  return (
    <div>
      <p>{email}</p>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};
