import { Button, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const About: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography>About</Typography>
      <Button onClick={() => navigate('/')}>About</Button>
    </>
  );
};
