import { Button, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Browse: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography>Browse</Typography>
      <Button onClick={() => navigate('/about')}>About</Button>
    </>
  );
};
