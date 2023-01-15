import { Button } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const Browse: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>Browse</div>
      <Button onClick={() => navigate('/about')}>About</Button>
    </>
  );
};
