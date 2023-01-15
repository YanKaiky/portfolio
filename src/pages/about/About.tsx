import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const About: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>About</div>
      <Button onClick={() => navigate('/')}>About</Button>
    </>
  );
};
